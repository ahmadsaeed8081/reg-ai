import React from "react";
import { TelegramIcon, TwitterIcon } from "../../assets/Icons";
import Timer from "../../components/Timer";
const About = () => {
  return (
    <div id="aboutus" className="about-us-section flex">
      <div className="wrap wrapWidth flex flex-col gap-12">
        <div className="main-block flex items-center justify-center gap-8">
          <div className="left-side flex flex-1">
            <img src="./images/girl-img.png" className="girl-img" />
          </div>
          <div className="right-side flex flex-1 flex-col gap-8">
            <div className="title">ABOUT</div>
            <div className="flex w-ful line"></div>
            <p className="desc">
              You will need tokens in your wallet to stake. Once you purchase
              CIP tokens, make sure that you add the CIP token to your
              MetaMask/TrustWallet Wallet so you can view your CIP balance.
              <br />
              <br />
              Click the "Connect Wallet" button at the upper right corner of the
              site and make sure you have the Arbitrum network selected in your
              MetaMask wallet.
            </p>
            <button className="btn-dtail btn button">More Details</button>
          </div>
        </div>
        <div className="token-box flex">
          <div className="box-left flex flex-col flex-1">
            <h1 className="slug mb-12">Token Of The Week</h1>
            <div className="detail-box flex gap-10">
              <div className="detail-left flex flex-col gap-4">
                <div className="flex flex-col">
                  <h2 className="text-[#ef55dc] font-bold text-lg">
                    TOKEN NAME
                  </h2>
                  <p className="text-white inter font-bold text-xl">
                    Regenerative Regai
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[#ef55dc] font-bold text-lg">Liquidity</h2>
                  <p className="text-white inter font-bold text-xl">
                    1 Million
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[#ef55dc] font-bold text-lg">BLOCKCHAIN</h2>
                  <p className="text-white inter font-bold text-xl">
                    Ethereum
                  </p>
                </div>
              </div>
              <div className="detail-right flex flex-col gap-4">
                <div className="flex flex-col">
                  <h2 className="text-[#ef55dc] font-bold text-lg">
                    TOKEN PRICE
                  </h2>
                  <p className="text-white inter font-bold text-xl">
                    0.1 Usdt
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[#ef55dc] font-bold text-lg">
                    DAILY VOLUME
                  </h2>
                  <p className="text-white inter font-bold text-xl">
                    1 Million
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[#ef55dc] font-bold text-lg">
                    WHERE TO BUY?
                  </h2>
                  <p className="text-white inter font-bold text-xl">
                    http:dummy0123.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-right flex flex-col flex-1 gap-10">
            <div className="flex items-center gap-2 sm:flex-col flex-row">
              <h3 className="text-white text-sm">Next Token In:</h3>
              <Timer />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <img src="./images/favicon.png" className="fav-icon" />
              {/* <div className="social flex items-center gap-3">
                <div className="icon flex items-center justify-center">
                  <TelegramIcon />
                </div>
                <div className="icon flex items-center justify-center">
                  <TwitterIcon />
                </div>
              </div> */}
              <a href="/" className="text-white inter font-light text-sm">
                www.generativeaitoken.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
