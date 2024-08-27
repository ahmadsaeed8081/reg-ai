import React, { useState } from "react";
import Wrapper from "../../routes/Wrapper";
import { CopyIcon } from "../../assets/Icons";
import DropDown from "../../components/DropDown";
import Timer from "../../components/Timer";

const Staking = () => {
  const [activeTab, setActiveTab] = useState("stake");
  const [selectedTab, setSelectedTab] = useState("Stacking");
  const [selectedPeriodValue, setSelectedPeriodValue] = useState({
    lbl: "200 Days",
    slug: "",
  });
  const periodList = [
    { lbl: "100 Days", slug: "" },
    { lbl: "200 Days", slug: "" },
    { lbl: "300 Days", slug: "" },
    { lbl: "400 Days", slug: "" },
    { lbl: "500 Days", slug: "" },
  ];
  return (
    <Wrapper>
      <div className="staking-page flex items-center justify-center">
        <div className="wrap   sm:w-[30%] w-full flex flex-col">
          <div className="flex items-center flex-col gap-3">
            <h1 className="text-white font-normal text-3xl mt-8">Staking</h1>
            <h2 className="text-white font-normal text-base inter">
              Stake A.I Token and earn Incentive token
            </h2>
          </div>
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
                          Lock-up Period:
                        </label>
                        <label className="text-white font-normal text-sm">
                          680%
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm">
                          Auto Compounding
                        </label>
                        <label className="text-white font-normal text-sm">
                          ON
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col my-10">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white font-light text-sm">
                          Staking Amount
                        </h1>
                        <h1 className="text-white font-light text-sm">
                          Balance: NaN PLP
                        </h1>
                      </div>
                      <div className="flex items-center p-2 rounded-lg border border-[#D114BA]">
                        <input
                          type="number"
                          className="w-full cleanbtn text-white zen-dots"
                          min={0}
                          placeholder="write amount"
                        />
                        <div className="flex items-center justify-center text-white font-light text-xs gap-1">
                          PLP{" "}
                          <div className="bg-[#D114BA] text-white text-xs p-1 rounded-md font-light">
                            Max
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn button">Approve</button>
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
                          Penalty
                        </label>
                        <label className="text-white font-normal text-sm">
                          10%
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
                        dropDownList={periodList}
                        selectedValue={selectedPeriodValue}
                        setSelectedValue={setSelectedPeriodValue}
                      />
                      <Timer />
                    </div>
                    <button className="btn button">Unstake</button>
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
                          0
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-white font-normal text-sm inter">
                          Available to Claim
                        </label>
                        <label className="text-white font-normal text-sm inter">
                          0
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
                        dropDownList={periodList}
                        selectedValue={selectedPeriodValue}
                        setSelectedValue={setSelectedPeriodValue}
                      />
                      <div className="flex items-center justify-end inter">
                        <label className="text-white font-bold text-sm">
                          Earning: <span className="text-[#D114BA]">0</span>
                        </label>
                      </div>
                    </div>
                    <button className="btn button">Claim</button>
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
