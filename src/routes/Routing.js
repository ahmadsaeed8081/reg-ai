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
  staking_address,
  staking_abi,     
  regai_address,
  token_abi  
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
  const [owner, set_owner] = useState();
  
  
  //staking
  const [regai_balance, set_regai_balance] = useState(0);
  const [choosed_Unstake_inv, set_choosed_Unstake_inv] = useState();
  const [allInvestments, set_investmentList] = useState([]);
  const [allInvestments_reward, set_allInvestments_reward] = useState([]);
  const [totalusers, set_totalusers] = useState(0);
  const [min_stake, set_min_stake] = useState(0);
  const [totalwithdraw, set_totalwithdraw] = useState(0);
  const [totalInvestment, set_totalInvestment] = useState(0);
  const [totalEarning, set_totalEarning] = useState(0);
  const [totalbusiness, set_totalbusiness] = useState(0);
  const [totalStaked, set_totalStaked] = useState(0);
  const [stakelimit, set_stakelimit] = useState(0);
  const [tokenPrice, set_tokenPrice] = useState(0);


  
  async function test() 
    {
  
      const web3= new Web3(new Web3.providers.HttpProvider("https://bsc-rpc.publicnode.com	"));
      const regai_contract=new web3.eth.Contract(token_abi,regai_address);
      const staking_contract=new web3.eth.Contract(staking_abi,staking_address);
      const contract = new web3.eth.Contract(minting_abi, mint_address);

      let balance;
      let allInvestments;
      let allInvestments_reward;
      let stak_user;
      let totalEarning;
      let regai_balance;
      let totalReward;
      let stakingLimit
      if(!isDisconnected){

        balance= await web3.eth.getBalance(address);
        regai_balance = await regai_contract.methods.balanceOf(address).call();    

        totalEarning = await staking_contract.methods.get_TotalReward().call({ from: address });   
        // totalEarning = await staking_contract.methods.get_TotalReward().call({ from: address }); 
        stak_user = await staking_contract.methods.user(address).call();      
         allInvestments = await staking_contract.methods.getAll_investments().call({from: address});
         allInvestments_reward = await staking_contract.methods.getAll_investments_forReward().call({from: address});

          stakingLimit = await staking_contract.methods.stakeLimitof(address).call();    


      }


      let supply = await contract.methods.totalSupply().call();
      let paused = await contract.methods.paused().call();  
      let nft_price = await contract.methods.Pass_price_Dollar().call();
      let nft_priceInBNB = await contract.methods.get_BNBPrice().call();

      let user = await contract.methods.user(address).call();
      let owner = await contract.methods.owner().call();

      let currTime = await staking_contract.methods.get_currTime().call();    
      let totalusers = await staking_contract.methods.totalusers().call();    
      let totalStaked = await staking_contract.methods.totalbusiness().call();    
      let perTokenValue = await staking_contract.methods.perTokenValue().call();    

      let totalbusiness = await staking_contract.methods.getTotalInvestment().call();
      set_nft_priceInBNB(nft_priceInBNB)
      set_tokenPrice(perTokenValue)
      set_totalStaked(totalStaked)
      set_stakelimit(stakingLimit)
      set_nft_price(nft_price)
      set_user(user)
      set_balance(balance)
      set_supply(supply)
      set_owner(owner)


    set_regai_balance(regai_balance);
    set_totalInvestment(stak_user?stak_user[1]:0)
    set_totalwithdraw(stak_user?stak_user[2]:0)
    set_totalEarning(totalEarning);
    set_totalbusiness(totalbusiness)
    set_min_stake(0)
    set_totalusers(totalusers)
    set_investmentList(allInvestments);
    set_allInvestments_reward(allInvestments_reward)

    }


    useEffect(()=>{

    
      test();
      
      },[address])
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staking" element={<Staking tokenPrice={tokenPrice} stakelimit={stakelimit} totalStaked={totalStaked} totalusers={totalusers} totalwithdraw={totalwithdraw} totalEarning={totalEarning} allInvestments_reward = {allInvestments_reward} totalInvestment={totalInvestment} regai_balance={regai_balance}  min_stake={min_stake}  allInvestments={allInvestments}  test={test}/>} />
        <Route path="/staking-pass" element={<StakingPass regai_balance={regai_balance}   owner={owner} user={user} nft_priceInBNB={nft_priceInBNB} nft_price={nft_price} balance={balance} supply={supply} test={test} />} />
        <Route path="/admin-form" element={<AdminForm />} />
        <Route path="/learn-more" element={<LearnMore />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
