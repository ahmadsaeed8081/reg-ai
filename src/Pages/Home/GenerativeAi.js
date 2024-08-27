import React from "react";

const GenerativeAi = () => {
  return (
    <div className="generative-ai-section flex">
      <div className="wrap wrapWidth flex flex-col items-center gap-4">
        <h1 className="text-white text-4xl font-medium mb-20">
          Regenerative A.I <span style={{ color:"#C918B7" }}>Tokenomics </span>
        </h1>
        <div className="about-block flex items-center justify-center gap-16 w-full">
          <div className="flex items-center justify-center flex-1">
            <img src="./images/tokenomics.svg" className="" />
          </div>
          {/* <div className="flex items-center justify-center flex-1">
            <div className="bars-list flex flex-col w-full gap-3">
              <div className="bar-item flex flex-col w-full gap-2">
                <h1 className="lbl">TEAM & DEVELOPMENT: 5%</h1>
                <div className="bar" />
              </div>
              <div className="bar-item flex flex-col w-full gap-2">
                <h1 className="lbl">MARKETING: 5%</h1>
                <div className="bar" />
              </div>
              <div className="bar-item flex flex-col w-full gap-2">
                <h1 className="lbl">PRE-LAUNCH PRIVATE SALE: 10%</h1>
                <div className="bar" />
              </div>
              <div className="bar-item flex flex-col w-full gap-2">
                <h1 className="lbl">STAKING REWARDS: 40%</h1>
                <div className="bar" />
              </div>
              <div className="bar-item flex flex-col w-full gap-2">
                <h1 className="lbl">LIQUIDITY: 40%</h1>
                <div className="bar" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GenerativeAi;
