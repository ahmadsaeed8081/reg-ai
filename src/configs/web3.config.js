import { http, createConfig } from 'wagmi'
import { bsc,bscTestnet} from 'wagmi/chains'
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { createClient } from 'viem'


const projectId = process.env.REACT_APP_WC_PROJECT_ID;
const metadata = {  

    name: "REGAI Staking Pass",
    description: "",
    url: "https://regenerativeai.com",
    icons: ["https://regenerativeai.com"]
    
};

export const config = defaultWagmiConfig({
    chains: process.env.REACT_APP_ENV == "production" ? [bsc] : [bscTestnet],
    projectId,
    metadata
});

createWeb3Modal({
    wagmiConfig: config,
    projectId,

});