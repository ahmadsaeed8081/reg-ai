import React, { useState } from "react";
import { ArrowDownIcon } from "../../assets/Icons";

const Faqs = () => {
  const faqs = [
    {
      question: "What is REG AI Token of the week?",
      answer:
        "Our AI-driven algorithm selects the top-performing token every week based on a sophisticated analysis of various metrics. The standard details of the token is provided along with the link from where it can be bought.",
    },
    {
      question: "What is a Staking Pass?",
      answer:
        "REG AI Staking Pass give you the opportunity to stake $REG AI tokens to earn additional tokens over time. Our staking model is designed to incentivize long-term participation while maintaining a deflationary supply.",
    },
    {
      question: "How to obtain a referral/invitation link?",
      answer:
        "Referral Link can be obtained from the person who invited you to Regenerative AI. If you do not have a referral link, you can obtain it from someone who is willing to assist you from our official Telegram Channel.",
    },
    {
      question: "How to purchase a Staking Pass?",
      answer:
        "REG AI Staking Pass can be purchased through the staking pass page on the website for $100 worth BNB and marginal gas fees. Connect Trust Wallet/Metamask. Enter referral/invitation link. Click on Mint Now and approve the Smart Contract.",
    },
    {
      question: "What are the benefits of Staking Pass?",
      answer:
        "By purchasing a staking pass, user gets access to stake REG AI Tokens worth $1000. To stake additional tokens, user needs to buy an additional staking pass.User gets his own referral/invitation link through which user can invite their contacts to the REG AI ecosystem and earn up to 50% in referral bonus.",
    },
    {
      question: "How to obtain a referral/invitation link?",
      answer:
        "Referral Link can be obtained from the person who invited you to Regenerative AI. If you do not have a referral link, you can obtain it from someone who is willing to assist you from our official Telegram Channel.",
    },
    {
      question: "How to purchase a Staking Pass?",
      answer:
        "REG AI Staking Pass can be purchased through the staking pass page on the website for $100 worth BNB and marginal gas fees. Connect Trust Wallet/Metamask. Enter referral/invitation link. Click on Mint Now and approve the Smart Contract.",
    },
    {
      question: "What are the benefits of Staking Pass?",
      answer:
        "By purchasing a staking pass, user gets access to stake REG AI Tokens worth $1000. To stake additional tokens, user needs to buy an additional staking pass.User gets his own referral/invitation link through which user can invite their contacts to the REG AI ecosystem and earn up to 50% in referral bonus.",
    },
    {
      question: "How to invite and earn?",
      answer:
        <p>To invite and earn, user needs to purchase a Staking Pass. On the Staking Pass page, user can obtain his own referral/invitation link. The compensation plan is as follows -LEVEL 1: 25% REFERRAL BONUS FOR 1 TO 10 SALES
        LEVEL 2: ADDITIONAL 15% (TOTAL 40%) REFERRAL BONUS FOR 11 TO 25 SALES
        LEVEL 3: ADDITIONAL 10% (TOTAL 50%) REFERRAL BONUS BEYOND 25 SALES
        </p>,
    },
    {
      question: "When does trading of REG AI tokens begin?",
      answer:
        "First Phase of the project is sale of Staking Pass. The trading of REG AI tokens will commence one month after the launch of the project. A countdown is provided on the trading page to notify the users.        ",
    },

    {
      question: "How to trade REG AI tokens?",
      answer:
        "On the website, go to the TRADE page. Select the amount of BNB that need you convert to REG AI token. Click on SWAP. Approve the Smart Contract. Please note that a 5% tax is applied whenever a trade is successfully executed.",
    },
    {
      question: "What is buy/sell tax?",
      answer:
        "REG AI Token has a 5% taxation rule on all trade executions. This means that a 5% tax will be applicable whenever you buy/sell/stake/transfer REG AI Tokens. This gives the community the incentive to hold the token longer and leads to better price discovery with time.",
    },
    {
      question: "How to stake REG AI tokens?",
      answer:
        "Possession of a Staking Pass is mandatory to stake REG AI Tokens. Visit the Staking Page. Enter the number of tokens to be staked and click on Approve. Approve the Smart Contract and wait for confirmation.",
    },
    {
      question: "How are staking rewards calculated?",
      answer:
        "12 million (40%) of REG AI Tokens are to be distributed as staking rewards over a period of 40 months. i.e. 1% of the supply every month.Your % of share in the pool will be provided to you as rewards depending upon the tenure of the stake. Suppose your share is 5% of the entire staking pool, your rewards will be 5% of the total tokens distributed during those number of blocks.",
    },
    {
      question: "How to claim staked REG AI tokens?",
      answer:
        "On the website, go to the staking page and select Rewards on the top right corner. You will be given a synopsis of your staking rewards. Hit the claim button and approve the Smart Contract. Your staked tokens + your reward tokens will be added to your wallet.",
    },
    
  ];
  const FaqsList = ({ item, index }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="faq flex flex-col gap-1">
        <div className="faq-meta flex items-center justify-between w-full">
          <h1 className="question inter">{item.question}</h1>
          <button
            className="icon flex items-center justify-center"
            onClick={(e) => setOpen(!open)}
          >
            <ArrowDownIcon />
          </button>
        </div>
        <p
          className={`answer text-white font-light text-xs ${
            open ? "open" : ""
          }`}
        >
          {item.answer}
        </p>
      </div>
    );
  };
  return (
    <div id="faq" className="faqs-section flex">
      <div className="wrap wrapWidth flex gap-10">
        <div className="meta-side flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-4">
            <div className="border-b border-white w-10"></div>
            <h1 className="text-white text-sm font-normal">FAQS</h1>
          </div>
          <h1 className="text-white text-2xl font-semibold">
            Frenquently Questions
          </h1>
          {/* <h3 className="text-sm font-normal text-white">What is A.I Token?</h3>
          <p className="text-white inter text-sm font-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more
          </p> */}
          <div className="faqs-list flex flex-col gap-2">
            {faqs.map((item, index) => (
              <FaqsList item={item} index={index} />
            ))}
          </div>
        </div>
        <div className="image-side flex flex-1 justify-end items-center">
          <img src="./images/faq.png" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
