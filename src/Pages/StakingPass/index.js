import React, { useState } from "react";
import Wrapper from "../../routes/Wrapper";
import { CopyIcon } from "../../assets/Icons";

const StakingPass = () => {
  const [numb, setNumb] = useState(1);

  return (
    <Wrapper>
      <div className="staking-pass-page flex items-center justify-center">
        <div className="wrap wrapWidth flex items-center justify-center gap-14">
          <div className="left flex items-center justify-center flex-1">
            <img src="./images/DigitalMarketing.png" />
          </div>
          <div className="right flex flex-col flex-1">
            <h1 className="title mb-4">Regenerative A.I Token</h1>
            <p className="price-lbl text-white font-light">Price per mint</p>
            <h2 className="title2 text-white font-medium text-xl mb-4">
              0.00 Generative Each
            </h2>
            <div className="flex flex-col gap-2">
              <div className="border border-[#D114BA] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Available To Mint
                </label>
                <label className="inter text-white font-normal text-sm">
                  0 minted out of 2210
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
                      onClick={(e) => setNumb(numb - 1)}
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
                  <label className="inter text-[#D114BA] font-normal text-sm">
                    20 max
                  </label>
                </div>
              </div>
              <div className="border border-[#D114BA] py-2 px-3 rounded-lg flex justify-between gap-2">
                <label className="inter text-white font-normal text-sm">
                  Total Amount
                </label>
                <label className="inter text-white font-normal text-sm">
                  0.00 ETH
                </label>
              </div>
              <button className="btn button text-white">Mint NFT Nows</button>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapWidth ">
        <div
          className="flex flex-col    mx-auto sm:py-28  py-10"
          style={{ marginTop: "-150px" }}
        >
          <h1 className="text-white font-semibold text-3xl zen-dots text-center my-10">
            Your Referral Reward
          </h1>
          <div className="flex items-center  flex-wrap justify-between gap-6">
            <div className="flex flex-col gap-4 rounded-lg p-4 border border-[#D114BA] sm:w-[350px] w-full min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-[#D114BA] text-white inter font-normal text-xs p-1 rounded-lg">
                  85%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl inter text-white sm:text-center text-left">
                Level 01
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
                  <h1 className="text-white  text-lg sm:text-center  text-left">
                    Direct sale
                  </h1>
                  <div className=" flex items-center  pt-1.5 justify-between  gap-3 ">
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[11px]">Quantity</p>
                      <p className=" text-white text-[11px] pt-2">100</p>
                      <p className=" text-white text-[11px]">SP</p>
                    </div>
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[11px]">Amount</p>
                      <p className=" text-white text-[11px] pt-2">200</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                    <div className="sm:text-center  text-left">
                      <p className=" text-[#D114BA]  text-[11px]">Reward</p>
                      <p className=" text-[#D114BA] text-[11px] pt-2">300</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                  </div>
                </div>
                <div className=" border  sm:block  hidden  border-[#D114BA] h-[100px]"></div>
                <div className="flex flex-col">
                  <h1 className="text-white  text-lg sm:text-center  text-left">
                    Indirect sale
                  </h1>
                  <div className=" flex items-center  pt-1.5 justify-between  gap-3 ">
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[11px]">Quantity</p>
                      <p className=" text-white text-[11px] pt-2">100</p>
                      <p className=" text-white text-[11px]">SP</p>
                    </div>
                    <div className=" sm:text-center  text-left">
                      <p className=" text-white text-[11px]">Amount</p>
                      <p className=" text-white text-[11px] pt-2">200</p>
                      <p className=" text-white text-[11px]">BNB</p>
                    </div>
                    <div className="sm:text-center  text-left">
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
            </div>
          </div>

          <div className="flex   flex-col p-5 border border-[#D114BA] rounded-xl mt-10  w-full mx-auto">
            <div className="flex items-center gap-2">
              <h1 className="text-white">My Link</h1>
              <div className="flex items-center justify-center cursor-pointer h-4 w-4">
                <CopyIcon />
              </div>
            </div>

            <h1 className="url  pt-2 font-semibold  text-[#D114BA] text-lg inter">
              https://StakeEarning.world/?ref=..
            </h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StakingPass;
