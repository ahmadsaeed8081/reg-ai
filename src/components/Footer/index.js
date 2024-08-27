import React, { useEffect, useState } from "react";
import { TelegramIcon, TwitterIcon } from "../../assets/Icons";

const Footer = () => {
  return (
    <div className="footer-comp flex flex-col bottom-0 left-0 right-0 w-full min-h-[60px]">
      <div className="top-sec flex py-8 border-t border-gray-600">
        <div className="wrap wrapWidth flex flex-col gap-2">
          <h1 className="text-white text-3xl font-medium text-center">
            Token Address
          </h1>
          <p className="text-white font-light text-sm text-center">
            Reg Ai: 0x8A36D4f99aa7E6a80c25Aa97291B83000EEdf646
          </p>
          <div className="social flex items-center justify-center gap-3">
            <div className="icon flex items-center justify-center cursor-pointer">
              <TwitterIcon />
            </div>
            <div className="icon flex items-center justify-center cursor-pointer">
              <TelegramIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        Copyright © 2024. All rights reserved by Regenerative AI.
      </div>
    </div>
  );
};

export default Footer;
