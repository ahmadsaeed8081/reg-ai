import React, { useState } from "react";
import Wrapper from "../../routes/Wrapper";

const AdminForm = () => {
  const [providerFavicon, setProviderFavicon] = useState();
  return (
    <Wrapper>
      <div className="admin-form-page flex">
        <div className="wrap wrapWidth flex flex-col gap-14">
          <div className="flex">
            <div
              className="img-box flex items-center justify-center h-28 w-28 p-2 bg-[#D114BA] border-dashed border-[2px] border-white rounded-lg relative cursor-pointer"
              onClick={() =>
                document.getElementById("upload_provider_favicon").click()
              }
            >
              {providerFavicon ? (
                <img
                  alt="img"
                  src={URL.createObjectURL(providerFavicon)}
                  className="h-full w-full overflow-hidden object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-full w-full text-white font-medium text-center text-xs">
                  Upload your photo
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                title=""
                name="image"
                id="upload_provider_favicon"
                className="hidden cleanbtn"
                onChange={(e) => {
                  setProviderFavicon(e.target.files[0]);
                }}
              />
            </div>
          </div>
          <div className="w-full grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Enter Token Name
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Regenerative Regai"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Token Price
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Token Price"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Liquidity
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Liquidity"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Daily Valium
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Daily Valium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Blockchain
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Blockchain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Where To Buy
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Where To Buy"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Twitter
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Twitter"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Telegram
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Telegram"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium text-base">
                Website Link
              </label>
              <input
                type="text"
                className="border border-[#D114BA] bg-[#2B2B2B] p-2 rounded-lg text-white"
                placeholder="Website Link"
              />
            </div>
            <div className="flex items-end w-full">
              <button className="btn button w-full">updated</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminForm;
