import React, { useState, useEffect } from "react";
import Wrapper from "../../routes/Wrapper";
import { CopyIcon } from "../../assets/Icons";
import { PiCopyLight } from "react-icons/pi";

import sp_image from "../../assets/images/DigitalMarketing.png";

import Web3 from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { mint_address, minting_abi } from "../../configs/Contracts";

import {
  CopyToClipboard,
  PartnerIcon,
  CycleIcon,
} from "react-copy-to-clipboard";

import { useLocation } from "react-router-dom";

import { useWeb3Modal } from "@web3modal/wagmi/react";

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import {
  useSimulateContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";




import { bsc, bscTestnet } from "wagmi/chains";

const StakingPass = (props) => {
  const [numb, setNumb] = useState(1);
  const chainId =
    process.env.REACT_APP_ENV == "production" ? bsc.id : bscTestnet.id;

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const {
    writeContractAsync,
    writeContract,
    data: hash,
    ...states
  } = useWriteContract();

  const [ref_add, set_ref] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { address, isConnecting, isDisconnected } = useAccount();

  const [count, set_count] = useState(0);

  const notify = () => toast("Transaction Successfull!");
  const link_notify = () => toast("Referral Link Copied!");

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function Mint1() {

    try {
      const tx = await writeContractAsync({
        abi: minting_abi,
        address: mint_address,
        functionName: "mint",
        args: [numb, ref_add, process.env.REACT_APP_PROJECT_ID],
        value:
          props.owner != address
            ? (Number(numb) * Number(props.nft_priceInBNB)).toString()
            : "0",
      });

      set_count(1);
    } catch (err) {
      console.log("mint issue");
    }
  }

  useEffect(() => {
    if (isConfirmed) {
      if (count == 1) {
        notify();
        setNumb(0);
        props.test();
      }
    }
  }, [isConfirmed]);

  function Convert_To_eth(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://base.drpc.org	")
    );

    val = web3.utils.fromWei(val.toString(), "ether");
    return val;
  }

  function Convert_To_Wei(val) {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://base.drpc.org	")
    );

    val = web3.utils.toWei(val.toString(), "ether");
    return val;
  }

  async function Mint() 
  {
    if (isDisconnected) {
      alert("kindly connect your wallet ");
      return;
    }


    const web3= new Web3(new Web3.providers.HttpProvider("https://bsc-rpc.publicnode.com	"));
    const staking_contract=new web3.eth.Contract(minting_abi,mint_address);

    
    if(Number(props.nft_priceInBNB) == 0 )
    {
      alert("Kindly wait data is fetching, try again in few seconds");
      return;
    }
    if(!Number(props.user[1]))
    {
      if(ref_add == "0x0000000000000000000000000000000000000000" )
      {
        alert("Its a community based project, You cannot join without a Referral Link");
        return;
      }
      let ref_reg = await staking_contract.methods.user(ref_add).call();    
  
      if(ref_reg[1] == false )
      {
        alert("Your given Referral link is not Registered");
        return;
      }
    }


    if (numb == 0) {
      alert("kindly write amount to stake ");
      return;
    }

    if (
      Number(props.balance) / 10 ** 18 <
      Number(numb) * (Number(props.nft_priceInBNB) / 10 ** 18)
    ) {
      alert("You don't have sufficient BNB");
      return;
    }
    if (chainId != currentChainId) {
      await switchChainAsync({ chainId });
      await Mint1?.();
    } else {
      await Mint1?.();
    }
  }

  useEffect(() => {
    if (params.get("ref") != null) {
      set_ref(params.get("ref"));
    }
  }, [address]);

  return (
    <Wrapper>
      <div className="staking-pass-page flex items-center justify-center">
        <div className="wrap wrapWidth flex items-center justify-center gap-14">
          <div className="left flex items-center justify-center flex-1">
            <img src={sp_image} />
          </div>
          <div className="right flex flex-col flex-1">
            <h1 className="title mb-4">Regenerative AI Staking Pass</h1>
            <p className="price-lbl text-white font-light">Price per mint</p>
            <h2 className="title2 text-white font-medium text-xl mb-4">
              ${props.nft_price ? Number(props.nft_price) / 10 ** 18 : 0} worth
              of BNB
            </h2>
            <div className="flex flex-col gap-2">
              <div className="border border-[#D114BA] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Total Sold
                </label>
                <label className="inter text-white font-normal text-sm">
                  {Number(props.supply)}
                </label>
              </div>
              <div className="border border-[#D114BA] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Mint Quantity
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="flex items-center justify-center h-4 w-4 text-lg rounded-full bg-white text-black"
                      onClick={(e) => setNumb(numb - 1 >= 0 ? numb - 1 : 0)}
                    >
                      -
                    </button>
                    <h2 className="numb text-white font-normal text-base inter">
                      {numb}
                    </h2>
                    <button
                      className="flex items-center justify-center h-4 w-4 text-lg rounded-full bg-white text-black"
                      onClick={(e) => setNumb(numb + 1)}
                    >
                      +
                    </button>
                  </div>
                  {/* <label className="inter text-[#D114BA] font-normal text-sm">
                    20 max
                  </label> */}
                </div>
              </div>
              <div className="border border-[#D114BA] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Total Amount
                </label>
                <label className="inter text-white font-normal text-sm">
                  {Number(numb) * Convert_To_eth(Number(props.nft_priceInBNB))}{" "}
                  BNB
                </label>
              </div>
              <button onClick={Mint} className="btn button text-white">
                {isConfirming ? "confirming" : "BUY NOW"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapWidth ">
        <div
          className="flex flex-col justify-between   mx-auto sm:py-28  py-10"
          style={{ marginTop: "-150px" }}
        >
          <h1 className="text-white font-semibold text-3xl zen-dots text-center my-10">
            Your Referral Rewards
          </h1>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className="flex flex-col gap-6 rounded-lg p-7 border border-[#D114BA]  min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg">
                  {/* 85% */}
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-xl inter text-white sm:text-center text-left">
                Total Earnings :{" "}
                {props.user
                  ? (
                      (Number(props.user[4]) + Number(props.user[7])) /
                      10 ** 18
                    ).toFixed(4)
                  : 0}{" "}
                <span className=" text-[#FF5EEB]">BNB</span>
              </h2>

              <div className="sm:flex block items-center justify-between inter">
                <div className="flex flex-col">
                  <h1 className="text-white  sm:text-lg text-sm sm:text-center  text-left">
                    Direct Sale
                  </h1>
                  <div className=" flex items-center  pt-3.5 justify-between  gap-5">
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        Quantity
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px] pt-2">
                        {props.user ? Number(props.user[2]) : 0}
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        SP
                      </p>
                    </div>
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        Amount
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px] pt-2">
                        {props.user
                          ? (Number(props.user[3]) / 10 ** 18).toFixed(4)
                          : 0}
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        BNB
                      </p>
                    </div>
                    <div className="sm:text-center  sm:text-[14px] text-[12px]">
                      <p className=" text-[#D114BA]  sm:text-[14px] text-[12px]">
                        Reward
                      </p>
                      <p className=" text-[#D114BA] sm:text-[14px] text-[12px] pt-2">
                        {props.user
                          ? (Number(props.user[4]) / 10 ** 18).toFixed(4)
                          : 0}
                      </p>
                      <p className=" text-white sm:text-[16px] text-[12px]">
                        BNB
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" border  sm:block  hidden  border-[#D114BA] h-[100px]"></div>
                <div className="flex flex-col">
                  <h1 className="text-white  sm:text-lg text-sm sm:text-center  text-left">
                    Indirect Sale
                  </h1>
                  <div className=" flex items-center  pt-3.5 justify-between  gap-5">
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white  sm:text-[14px] text-[12px]">
                        Quantity
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px] pt-2">
                        {props.user ? Number(props.user[5]) : 0}
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        SP
                      </p>
                    </div>
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        Amount
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px] pt-2">
                        {props.user
                          ? (Number(props.user[6]) / 10 ** 18).toFixed(4)
                          : 0}
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        BNB
                      </p>
                    </div>
                    <div className="sm:text-center  text-left">
                      <p className=" text-[#D114BA]  sm:text-[14px] text-[12px]">
                        Reward
                      </p>
                      <p className=" text-[#D114BA] sm:text-[14px] text-[12px] pt-2">
                        {props.user
                          ? (Number(props.user[7]) / 10 ** 18).toFixed(4)
                          : 0}
                      </p>
                      <p className=" text-white sm:text-[14px] text-[12px]">
                        BNB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex   flex-col p-5 border border-[#D114BA] rounded-xl mt-10  w-full mx-auto">
                <div className="flex items-center gap-2">
                  <h1 className="text-white">My Link</h1>
                  <div className="flex items-center justify-center cursor-pointer h-4 w-4">
                    <CopyToClipboard
                      text={`${window.location.host}/staking-pass/?ref=${
                        address ? address : ""
                      }`}
                    >
                      <PiCopyLight onClick={link_notify} color="#ffffff" />
                    </CopyToClipboard>
                  </div>
                </div>

                <h1 className="url  pt-2 font-semibold  text-[#D114BA] text-lg inter">
                  {window.location.host}/?ref=
                  {address
                    ? address.slice(0, 4) + "..." + address.slice(39, 42)
                    : "connnect wallet"}
                </h1>
              </div>
            </div>

            <div>
              <h3 className=" text-white text-lg">
                Invite friends and earn rewards when they join the $REG Al
                ecosystem. Our referral system is designed to foster organic
                growth while rewarding early adopters.
              </h3>
              <h1 className=" text-[#D114BA] font-bold text-xl pt-3">
                Referral Bonus:
              </h1>

              <div className=" flex justify-between items-center">
                <div>
                  <ul className=" p-0">
                    <li className=" text-white">
                      • LEVEL 1:<br></br>
                       25% REFERRAL BONUS FOR 1 TO 10 SALES
                    </li>
                    <li  className=" text-white">
                    • LEVEL
                      2: <br></br>ADDITIONAL 15% (TOTAL 40%) REFERRAL BONUS FOR 11 TO 25
                      SALES
                    </li>
                    <li className="text-white">
                    • LEVEL 3 : <br></br>ADDITIONAL 10% (TOTAL 50%)
                    REFERRAL BONUS BEYOND 25 SALES
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src={require("../../assets/images/Yellow coming soon Instagram.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default StakingPass;
