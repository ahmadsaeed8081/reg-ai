import React, { useState,useEffect } from "react";
import Wrapper from "../../routes/Wrapper";
import { CopyIcon } from "../../assets/Icons";
import DropDown from "../../components/DropDown";
import DropDown_rew from "../../components/DropDown_rew";

import Timer from "../../components/Timer";


import moment from "moment";

import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {

  staking_address,
  staking_abi,
  token_abi,
  regai_address       
} from "../../configs/Contracts";
import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { bsc, bscTestnet } from "wagmi/chains";




const Staking = (props) => {
  const [activeTab, setActiveTab] = useState("stake");
  const [selectedTab, setSelectedTab] = useState("Stacking");
  const [selectedPeriodValue, setSelectedPeriodValue] = useState([]);
  const [selectedPeriodValue1, setSelectedPeriodValue1] = useState([]);

  const periodList = [
    { lbl: "100 Days", slug: "" },
    { lbl: "200 Days", slug: "" },
    { lbl: "300 Days", slug: "" },
    { lbl: "400 Days", slug: "" },
    { lbl: "500 Days", slug: "" },
  ];






  const chainId = process.env.REACT_APP_ENV == "production" ? bsc.id : bscTestnet.id;

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const { address, isConnecting ,isDisconnected} = useAccount()

  const [count, set_count] = useState(0);

  const notify = () => toast("Transaction Successfull!");

  const count1 = (time) => {
    const now = new Date(time*1000);
  
    const t=moment(now).format('D MMM YYYY');
    return t;
    
  };


  const { isLoading: isConfirming, isSuccess: isConfirmed} =
  useWaitForTransactionReceipt({
    hash,
  })

  const [stakeAmount, setStakedAmount] = useState(0);

  async function stake1() {


    try {
        const tx = await writeContractAsync({
          abi: staking_abi,
          address: staking_address,
          functionName: "Stake", 
          args: [
            Convert_To_Wei(stakeAmount? Number(stakeAmount) : 0), 
          ],

        });

        set_count(1)

    } catch (err) {
        console.error(err);
    }
}

async function unstake1() {

  try {
      const tx = await writeContractAsync({
        abi: staking_abi,
        address: staking_address,
        functionName: "unStake", 
        args: [
            selectedPeriodValue ? selectedPeriodValue[2]:0
        ],

      });

      set_count(1)

  } catch (err) {
      console.error(err);
  }
}


async function claim1() {

  try {
      const tx = await writeContractAsync({
        abi: staking_abi,
        address: staking_address,
        functionName: "withdrawReward", 
        args: [
          selectedPeriodValue ? selectedPeriodValue[2]:0
        ],

      });

      set_count(1)

  } catch (err) {
      console.error(err);
  }
}


useEffect(()=>{
  if(isConfirmed)
  {
    if(count==0)
    {
      // alert("ninkn")
      stake1()

    }
    if(count==1)
    {
      set_count(0)
      notify()
      setStakedAmount(0)
      props.test();
    }
  }


},[isConfirmed])

  async function regai_approval () {
    try {
        const tx = await writeContractAsync({
          abi: token_abi,
          address: regai_address,
          args: [staking_address,Convert_To_Wei( stakeAmount ? Number(stakeAmount) : "0")],
          functionName: "approve",

        }); 
        // stake1();
  
       } catch (err) {
        console.error(err);
    }
  }







  function Convert_To_eth(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://polygon.meowrpc.com")
    );

    val = web3.utils.fromWei(val.toString(), "ether");
    return val;
  }

  function Convert_To_Wei(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://polygon.meowrpc.com")
    );

    val = web3.utils.toWei(val.toString(), "ether");
    return val;
  }



  async function stake()
  {
    

    if(isDisconnected)
    {
      alert("kindly connect your wallet ");
      return;
    }
    
    if(Number(props.stakelimit)==0 )
    {
      alert("kindly Purchase staking pass to do staking");
      return;
    }

    if(stakeAmount==0 )
    {
      alert("kindly write amount to stake ");
      return;
    }
    if(Number(props.stakelimit)/10**18 < (stakeAmount * (Number(props.tokenPrice)/10**18) ))
    {
      alert("you cant stake more than staking limit, to increase limit buy staking pass");
      return;
    }
    if(Number(stakeAmount)<Number(props.min_stake)/10**18 )
    {
      alert("Minimum Stake amount is "+ Number(props.min_stake)/10**18);
      return;
    }


    if(Number(props.regai_balance)/10**18 < Number(stakeAmount))
    {
      alert("You don't have sufficient balance");
      return;
    }
    if (chainId != currentChainId )
    {
      await switchChainAsync({ chainId });
      await regai_approval?.();
    } 
    else 
    {
      await regai_approval?.();
    }

  }


  async function unstake()
  {
    if(isDisconnected)
    {
      alert("kindly connect your wallet ");
      return;
    }

    if (chainId != currentChainId )
    {
      await switchChainAsync({ chainId });
      await unstake1?.();
    } 
    else 
    {
      await unstake1?.();
    }
    

  }

  async function claim()
  {
    if(isDisconnected)
    {
      alert("kindly connect your wallet ");
      return;
    }

    if (chainId != currentChainId )
    {
      await switchChainAsync({ chainId });
      await claim1?.();
    } 
    else 
    {
      await claim1?.();
    }
    

  }





  return (
    <Wrapper>
      <div className="staking-page flex items-center justify-center">
        <div className="wrap   sm:w-[30%] w-full flex flex-col">
          {/* <div className="flex items-center flex-col gap-3">
            <h1 className="text-white font-normal text-3xl mt-8">Staking</h1>
            <h2 className="text-white font-normal text-base inter">
              Stake A.I Token and earn Incentive token
            </h2>
          </div> */}
          <div className="main-block flex items-center justify-center gap-10 mt-10" >
            <div className="left flex flex-col flex-1 gap-6" >
              <div className="tabs flex items-center gap-2">
                <div
                  className={`tab-item ${
                    activeTab === "stake" ? "active" : ""
                  }`}
                  onClick={(e) => setActiveTab("stake")}
                >
                  Stake
                </div>
                <div
                  className={`tab-item ${
                    activeTab === "unstake" ? "active" : ""
                  }`}
                  onClick={(e) => setActiveTab("unstake")}
                >
                  Unstake
                </div>
                <div
                  className={`tab-item ${
                    activeTab === "reward" ? "active" : ""
                  }`}
                  onClick={(e) => setActiveTab("reward")}
                >
                  Reward
                </div>
              </div>
              {activeTab === "stake" ? (
                <div className="stack-box flex flex-col">
                  <div className=" flex items-center gap-3 py-5 px-6 justify-between border-b border-[#D114BA]">
                    <div className="flex items-center justify-center">
                      <img src="./images/favicon.png" className="h-10 w-10" />
                    </div>
                    <h3 className="text-white font-normal text-lg">A.I</h3>
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="flex flex-col gap-3 border-b border-[#D114BA] pb-6">
                      <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm">
                          Total Staked:
                        </label>
                        <label className="text-white font-normal text-sm">
                          {props.totalStaked?Number(props.totalStaked)/10**18:0} Reg AI
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm">
                          Total Stakers:
                        </label>
                        <label className="text-white font-normal text-sm">
                        {props.totalusers?Number(props.totalusers):0}

                        </label>
                      </div>

                                        <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm">
                          Your Stake Limit Left:
                        </label>
                        <label className="text-white font-normal text-sm">
                        {props.stakelimit?(Number(props.stakelimit)/10**18) / (Number(props.tokenPrice)/10**18):0} Reg AI

                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col my-10">
                      <div className="flex items-center justify-between">
                        <h1 className="text-whitess text-white font-light text-sm">
                          Write Amount
                        </h1>
                        <h1 className="text-white font-light text-sm">
                          Balance: {props.regai_balance?(Number(props.regai_balance)/10**18):0} Reg Ai
                        </h1>
                      </div>
                      <div className="flex items-center p-2 rounded-lg border border-[#D114BA]">
                        <input
                          type="number"
                          className="w-full cleanbtn text-white zen-dots"
                          placeholder="write amount"

                          min={0}
                          value={stakeAmount}
                          max={props.regai_balance>0?(Number(props.regai_balance)/10**18):0}
                          onChange={(e)=>setStakedAmount(e.target.value)}
  
                        />
                        <div className="flex items-center justify-center text-white font-light text-xs gap-1">
                          <div className="bg-[#D114BA] text-white text-xs p-1 rounded-md font-light"
                            onClick={(e)=>setStakedAmount(props.regai_balance>0?(Number(props.regai_balance)/10**18):0)}

                          >
                            Max
                          </div>
                        </div>
                      </div>
                    </div>
                    <button onClick={stake} className="btn button mt-10">Approve</button>
                  </div>
                </div>
              ) : activeTab === "unstake" ? (
                <div className="stack-box flex flex-col">
                  <div className=" flex items-center gap-3 py-5 px-6 justify-between border-b border-[#D114BA]">
                    <div className="flex items-center justify-center">
                      <img src="./images/favicon.png" className="h-10 w-10" />
                    </div>
                    <h3 className="text-white font-normal text-lg">A.I</h3>
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="flex flex-col gap-3 border-b border-[#D114BA] pb-6">
                      <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm">
                          Your Staked Amoount
                        </label>
                        <label className="text-white font-normal text-sm">
                          {props.totalInvestment?Number(props.totalInvestment)/10**18:0} Reg AI
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col my-10 gap-2">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white font-light text-sm inter">
                          Current Investment
                        </h1>
                      </div>
                      <DropDown
                        dropDownList={props.allInvestments}
                        selectedValue={selectedPeriodValue}
                        setSelectedValue={setSelectedPeriodValue}
                      />
                      {/* <Timer time={selectedPeriodValue? selectedPeriodValue[1]:0} /> */}
                    </div>
                    <button onClick={unstake} style={{ marginTop:"100px" }} className="btn button mt-10">Unstake</button>
                  </div>
                </div>
              ) : activeTab === "reward" ? (
                <div className="stack-box flex flex-col">
                  <div className=" flex items-center gap-3 py-5 px-6 justify-between border-b border-[#D114BA]">
                    <div className="flex items-center justify-center">
                      <img src="./images/favicon.png" className="h-10 w-10" />
                    </div>
                    <h3 className="text-white font-normal text-lg">A.I</h3>
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="flex flex-col gap-3 border-b border-[#D114BA] pb-6">
                      <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm inter">
                          Total Earnings
                        </label>
                        <label className="text-white font-normal text-sm inter">
                          {props.totalEarning ? Number(props.totalEarning)/10**18:0} Reg AI
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm inter">
                          Available to Claim
                        </label>
                        <label className="text-white font-normal text-sm inter">
                        {props.totalEarning?( Number(props.totalEarning) - Number(props.totalwithdraw))/10**18 :0} Reg AI
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col my-10 gap-2">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white font-light text-sm inter">
                          Investment History
                        </h1>
                      </div>
                      <DropDown
                        dropDownList={props.allInvestments_reward}
                        selectedValue={selectedPeriodValue1}
                        setSelectedValue={setSelectedPeriodValue1}
                      />
                      <div className="flex items-center justify-end inter">
                        <label className="text-white font-bold text-sm">
                          Earning: <span className="text-[#D114BA]">{selectedPeriodValue1?Number(selectedPeriodValue1[5])/10**18:0}</span>
                        </label>
                      </div>
                    </div>
                    <button onClick={claim} className="btn button mt-10">Claim</button>
                  </div>
                </div>
              ) : null}
            </div>
            {/* <div className="right flex flex-1 flex-col">
              <div className="w-full grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 mb-5">
                <div className="flex flex-col p-5 border border-[#D114BA] rounded-xl">
                  <h1 className="text-white">Total Investment</h1>
                  <h1 className="text-white font-semibold text-xl inter">0</h1>
                </div>
                <div className="flex flex-col p-5 border border-[#D114BA] rounded-xl">
                  <h1 className="text-white">Total Earning</h1>
                  <h1 className="text-white font-semibold text-xl inter">0</h1>
                </div>
                <div className="flex flex-col p-5 border border-[#D114BA] rounded-xl">
                  <h1 className="text-white">Current Balance</h1>
                  <h1 className="text-white font-semibold text-xl inter">0</h1>
                  <div className="flex items-center justify-end">
                    <button className="btn button text-xs !p-2">
                      Withdrawal
                    </button>
                  </div>
                </div>
                <div className="flex flex-col p-5 border border-[#D114BA] rounded-xl">
                  <h1 className="text-white">Total Referrals</h1>
                  <h1 className="text-white font-semibold text-xl inter">0</h1>
                </div>
              </div>
              <div className="flex flex-col p-5 border border-[#D114BA] rounded-xl">
                <div className="flex items-center gap-2">
                  <h1 className="text-white">My Link</h1>
                  <div className="flex items-center justify-center cursor-pointer h-4 w-4">
                    <CopyIcon />
                  </div>
                </div>

                <h1 className="url text-white font-semibold text-lg inter">
                  https://StakeEarning.world/?ref=..
                </h1>
              </div>
            </div> */}
          </div>
          {/* <div className="flex flex-col w-full sm:px-8 sm:py-28 px-2 py-10">
            <h1 className="text-white font-semibold text-3xl zen-dots text-center my-10">
              Your Referral Reward
            </h1>
            <div className="flex items-center flex-wrap justify-center gap-6">
              <div className="flex flex-col gap-4 rounded-lg p-6 border border-[#D114BA] sm:w-[280px] w-full min-h-[200px]">
                <div className="flex items-center justify-end w-full">
                  <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg">
                    85%
                  </h3>
                </div>
                <h2 className="zen-dots font-medium text-2xl inter text-white text-center">
                  Level 01
                </h2>
                <div className="flex items-center justify-between inter">
                  <div className="flex flex-col">
                    <h1 className="text-white">Total Earning</h1>
                    <p className="text-white font-medium">200.00</p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white">Team</h1>
                    <p className="text-white font-medium">02</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg p-6 border border-[#D114BA] sm:w-[280px] w-full min-h-[200px]">
                <div className="flex items-center justify-end w-full">
                  <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg">
                    85%
                  </h3>
                </div>
                <h2 className="zen-dots font-medium text-2xl inter text-white text-center">
                  Level 02
                </h2>
                <div className="flex items-center justify-between inter">
                  <div className="flex flex-col">
                    <h1 className="text-white">Total Earning</h1>
                    <p className="text-white font-medium">200.00</p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white">Team</h1>
                    <p className="text-white font-medium">02</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg p-6 border border-[#D114BA] sm:w-[280px] w-full min-h-[200px]">
                <div className="flex items-center justify-end w-full">
                  <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg">
                    85%
                  </h3>
                </div>
                <h2 className="zen-dots font-medium text-2xl inter text-white text-center">
                  Level 03
                </h2>
                <div className="flex items-center justify-between inter">
                  <div className="flex flex-col">
                    <h1 className="text-white">Total Earning</h1>
                    <p className="text-white font-medium">200.00</p>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-white">Team</h1>
                    <p className="text-white font-medium">02</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Staking;
