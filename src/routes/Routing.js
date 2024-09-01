import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Staking from "../Pages/Staking";
import StakingPass from "../Pages/StakingPass";
import AdminForm from "../Pages/AdminForm";
import LearnMore from "../Pages/LearnMore";

import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  mint_address,
  minting_abi,       
} from "../configs/Contracts";

import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";


const Routing = () => {


  const { address, isConnecting ,isDisconnected} = useAccount()

  const [supply, set_supply] = useState(0);
  const [cost, set_cost] = useState(0);
  const [balance, set_balance] = useState(0);
  const [maxMintAmount, set_maxMintAmount] = useState(0);
  const [nft_price, set_nft_price] = useState(0);
  const [nft_priceInBNB, set_nft_priceInBNB] = useState(0);

  const [user, set_user] = useState([]);


  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();




  async function test() 
    {
  
      const web3= new Web3(new Web3.providers.HttpProvider("https://bsc-testnet-rpc.publicnode.com	"));
      let balance;
      if(!isDisconnected){
        balance= await web3.eth.getBalance(address);
      }

      const contract = new web3.eth.Contract(minting_abi, mint_address);

      let supply = await contract.methods.totalSupply().call();
      let paused = await contract.methods.paused().call();  
      let nft_price = await contract.methods.Pass_price_Dollar().call();
      let nft_priceInBNB = await contract.methods.get_BNBPrice().call();

      let user = await contract.methods.user(address).call();

      set_nft_priceInBNB(nft_priceInBNB)
      set_nft_price(nft_price)
      set_user(user)
      set_balance(balance)
      set_supply(supply)
      // set_ref_count(ref_count)
      // set_ref_earning(ref_earning)
      alert(nft_priceInBNB)
    }


    useEffect(()=>{

    
      test();
      
      },[address])
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/staking-pass" element={<StakingPass user={user} nft_priceInBNB={nft_priceInBNB} nft_price={nft_price} balance={balance} supply={supply}/>} />
        <Route path="/admin-form" element={<AdminForm />} />
        <Route path="/learn-more" element={<LearnMore />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
