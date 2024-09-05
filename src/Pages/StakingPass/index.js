import React, { useState,useEffect } from "react";
import Wrapper from "../../routes/Wrapper";
import { CopyIcon } from "../../assets/Icons";
import { PiCopyLight } from "react-icons/pi";

import sp_image from '../../assets/images/DigitalMarketing.png';

import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {

  mint_address,
  minting_abi,       
} from "../../configs/Contracts";

import {
  CopyToClipboard,
  PartnerIcon,
  CycleIcon,
} from "react-copy-to-clipboard";

import { useLocation } from "react-router-dom";

import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { bsc, bscTestnet } from "wagmi/chains";


const StakingPass = (props) => {
  const [numb, setNumb] = useState(1);
  const chainId = process.env.REACT_APP_ENV == "production" ? bsc.id : bscTestnet.id;

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const [ref_add, set_ref] = useState("0x0000000000000000000000000000000000000000");

  const location = useLocation();
  const params = new URLSearchParams(location.search);


  const { address, isConnecting ,isDisconnected} = useAccount()

  const [count, set_count] = useState(0);

  const notify = () => toast("Transaction Successfull!");
  const link_notify = () => toast("Referral Link Copied!");


  const { isLoading: isConfirming, isSuccess: isConfirmed} =
  useWaitForTransactionReceipt({
    hash,
  })





  


  async function Mint1() {
  try {
    const tx = await writeContractAsync({
      abi: minting_abi,
      address: mint_address,
      functionName: "mint", 
      args: [numb,ref_add,"78967887"],
      value: props.owner!=address? (Number(numb) * (Number(props.nft_priceInBNB))).toString():"0"

    });

    set_count(1)

} catch (err) {
    console.error(err);
}
}



useEffect(()=>{
if(isConfirmed)
{
if(count==1)
{
  notify()
  setNumb(0)
  props.test();
}
}


},[isConfirmed])









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
if(isDisconnected)
{
  alert("kindly connect your wallet ");
  return;
}
if(numb==0 )
{
  alert("kindly write amount to stake ");
  return;
}

if(Number(props.balance)/10**18 < (Number(numb)* (Number(props.nft_priceInBNB)/10**18)))
{
  alert("You don't have sufficient BNB");
  return;
}
if (chainId != currentChainId )
{
  await switchChainAsync({ chainId });
  await Mint1?.()
} 
else 
{
  await Mint1?.()
}

}

useEffect(()=>{
  if(params.get("ref")!=null)
  {
    set_ref(params.get("ref"))

  }
  
  },[address])

  return (
    <Wrapper>
      <div className="staking-pass-page flex items-center justify-center">
        <div className="wrap wrapWidth flex items-center justify-center gap-14">
          <div className="left flex items-center justify-center flex-1">
            <img src={sp_image} />
          </div>
          <div className="right flex flex-col flex-1">
            <h1 className="title mb-4">Regenerative A.I Token</h1>
            <p className="price-lbl text-white font-light">Price per mint</p>
            <h2 className="title2 text-white font-medium text-xl mb-4">
             ${props.nft_price?Number(props.nft_price)/10**18:0} worth BNB
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
                  Mint Amount
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="flex items-center justify-center h-4 w-4 text-lg rounded-full bg-white text-black"
                      onClick={(e) => setNumb(numb - 1 >=0 ? numb - 1: 0)}
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
                  {(Number(numb)* Convert_To_eth(Number(props.nft_priceInBNB)))} BNB
                </label>
              </div>
              <button onClick={Mint} className="btn button text-white">{isConfirming ? "confirming" : "Mint Now"}</button>
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
            Your Referral Reward
          </h1>
          <div className="flex items-center  flex-wrap justify-center cursor-pointer">
            <div className="flex flex-col gap-6 rounded-lg p-5 border border-[#D114BA] sm:w-[800px]  min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg" >
                  {/* 85% */}
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl inter text-white sm:text-center text-left">
              Total Earning : {props.user? ((Number(props.user[4])+ Number(props.user[7]))/10**18).toFixed(4) :0} <span className=" text-[#FF5EEB]">BNB</span>
              </h2>

              <div className="sm:flex block items-center justify-between inter">
                <div className="flex flex-col">
                  <h1 className="text-white  text-xl sm:text-center  text-left">
                    Direct sale
                  </h1>
                  <div className=" flex items-center  pt-3.5 justify-between  gap-20 ">
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[16px]">Quantity</p>
                      <p className=" text-white text-[16px] pt-2">{props.user? Number(props.user[2]):0}</p>
                      <p className=" text-white text-[16px]">SP</p>
                    </div>
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[16px]">Amount</p>
                      <p className=" text-white text-[16px] pt-2">{props.user? (Number(props.user[3])/10**18).toFixed(4):0}</p>
                      <p className=" text-white text-[16px]">BNB</p>
                    </div>
                    <div className="sm:text-center  text-left">
                      <p className=" text-[#D114BA]  text-[16px]">Reward</p>
                      <p className=" text-[#D114BA] text-[16px] pt-2">{props.user? (Number(props.user[4])/10**18).toFixed(4):0}</p>
                      <p className=" text-white text-[16px]">BNB</p>
                    </div>
                  </div>
                </div>
                <div className=" border  sm:block  hidden  border-[#D114BA] h-[100px]"></div>
                <div className="flex flex-col">
                  <h1 className="text-white  text-xl sm:text-center  text-left">
                    Indirect sale
                  </h1>
                  <div className=" flex items-center  pt-3.5 justify-between  gap-20 ">
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[16px]">Quantity</p>
                      <p className=" text-white text-[16px] pt-2">{props.user? Number(props.user[5]):0}</p>
                      <p className=" text-white text-[16px]">SP</p>
                    </div>
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[16px]">Amount</p>
                      <p className=" text-white text-[16px] pt-2">{props.user? (Number(props.user[6])/10**18).toFixed(4):0}</p>
                      <p className=" text-white text-[16px]">BNB</p>
                    </div>
                    <div className="sm:text-center  text-left">
                      <p className=" text-[#D114BA]  text-[16px]">Reward</p>
                      <p className=" text-[#D114BA] text-[16px] pt-2">{props.user? (Number(props.user[7])/10**18).toFixed(4):0}</p>
                      <p className=" text-white text-[16px]">BNB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-4 rounded-lg p-4 border border-[#D114BA] sm:w-[350px] w-full min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg">
                  85%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl inter text-white sm:text-center text-left">
                Level 02
              </h2>
              <div className="flex items-center justify-between inter">
                <div className="flex flex-col">
                  <h1 className="text-white">Total Earning</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">
                    123.123 <span className=" text-[#FF5EEB]">BNB</span>
                  </h1>
                </div>
              </div>
              <div className="sm:flex block items-center justify-between inter">
                <div className="flex flex-col">
                  <h1 className="text-white  text-lg sm:text-center text-left">
                    Direct sale
                  </h1>
                  <div className=" flex items-center  pt-1.5 justify-between  gap-3 ">
                    <div className=" sm:text-center text-left">
                      <p className=" text-white text-[11px]">Quantity</p>
                      <p className=" text-white text-[11px] pt-2">100</p>
                      <p className=" text-white text-[11px]">SP</p>
                    </div>
                    <div className="  sm:text-center text-left">
                      <p className=" text-white text-[11px]">Amount</p>
                      <p className=" text-white text-[11px] pt-2">200</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                    <div className="  sm:text-center text-left">
                      <p className=" text-[#D114BA]  text-[11px]">Reward</p>
                      <p className=" text-[#D114BA] text-[11px] pt-2">300</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                  </div>
                </div>
                <div className=" border  sm:block hidden border-[#D114BA] h-[100px]"></div>
                <div className="flex flex-col">
                  <h1 className="text-white  text-lg  sm:text-center text-left">
                    Indirect sale
                  </h1>
                  <div className=" flex items-center  pt-1.5 justify-between  gap-3 ">
                    <div className="  sm:text-center text-left">
                      <p className=" text-white text-[11px]">Quantity</p>
                      <p className=" text-white text-[11px] pt-2">100</p>
                      <p className=" text-white text-[11px]">SP</p>
                    </div>
                    <div className=" sm:text-center text-left">
                      <p className=" text-white text-[11px]">Amount</p>
                      <p className=" text-white text-[11px] pt-2">200</p>
                      <p className=" text-white text-[11px] ">BNB</p>
                    </div>
                    <div className=" sm:text-center text-left">
                      <p className=" text-[#D114BA]  text-[11px]">Reward</p>
                      <p className=" text-[#D114BA] text-[11px] pt-2">300</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-4 border border-[#D114BA] sm:w-[350px] w-full min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg">
                  85%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl inter text-white sm:text-center text-left">
                Level 03
              </h2>
              <div className="flex items-center justify-between inter">
                <div className="flex flex-col">
                  <h1 className="text-white">Total Earning</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">
                    123.123 <span className=" text-[#FF5EEB]">BNB</span>
                  </h1>
                </div>
              </div>
              <div className="sm:flex block items-center justify-between inter">
                <div className="flex flex-col">
                  <h1 className="text-white  text-lg sm:text-center text-left">
                    Direct sale
                  </h1>
                  <div className=" flex items-center  pt-1.5 justify-between  gap-3 ">
                    <div className=" sm:text-center text-left">
                      <p className=" text-white text-[11px]">Quantity</p>
                      <p className=" text-white text-[11px] pt-2">100</p>
                      <p className=" text-white text-[11px]">SP</p>
                    </div>
                    <div className=" sm:text-center text-left">
                      <p className=" text-white text-[11px]">Amount</p>
                      <p className=" text-white text-[11px] pt-2">200</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                    <div className=" sm:text-center text-left">
                      <p className=" text-[#D114BA]  text-[11px]">Reward</p>
                      <p className=" text-[#D114BA] text-[11px] pt-2">300</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                  </div>
                </div>
                <div className=" border sm:block hidden  border-[#D114BA] h-[100px]"></div>
                <div className="flex flex-col">
                  <h1 className="text-white  text-lg sm:text-center text-left">
                    Indirect sale
                  </h1>
                  <div className=" flex items-center  pt-1.5 justify-between  gap-3 ">
                    <div className="sm:text-center text-left">
                      <p className=" text-white text-[11px]">Quantity</p>
                      <p className=" text-white text-[11px] pt-2">100</p>
                      <p className=" text-white text-[11px]">SP</p>
                    </div>
                    <div className=" sm:text-center text-left">
                      <p className=" text-white text-[11px]">Amount</p>
                      <p className=" text-white text-[11px] pt-2">200</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                    <div className=" sm:text-center text-left">
                      <p className=" text-[#D114BA]  text-[11px]">Reward</p>
                      <p className=" text-[#D114BA] text-[11px] pt-2">300</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="flex   flex-col p-5 border border-[#D114BA] rounded-xl mt-10  sm:w-[800px] mx-auto">
            <div className="flex items-center gap-2">
              <h1 className="text-white" >My Link</h1>
              <div className="flex items-center justify-center cursor-pointer h-4 w-4">
              <CopyToClipboard text={`${window.location.host}/staking-pass/?ref=${address? address:""}`}>

                <PiCopyLight onClick={link_notify} color="#ffffff"/>

              </CopyToClipboard>

              </div>
            </div>

            <h1 className="url  pt-2 font-semibold  text-[#D114BA] text-lg inter">
              {window.location.host}/?ref={address ? address.slice(0,4)+"..."+address.slice(39,42):"connnect wallet"}
            </h1>
          </div>
        </div>

      </div>
      <ToastContainer />

    </Wrapper>
    
  );
};

export default StakingPass;
