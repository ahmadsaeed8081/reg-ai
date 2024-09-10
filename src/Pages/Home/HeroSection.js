import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeroSection = () => {


  const openPdfInNewTab = () => {
    const pdfUrl = require("../../assets/images/white-paper.pdf");
    window.open(pdfUrl, "_blank");
  };


  return (
    <div className="hero-section flex">
      <div className="wrap wrapWidth flex items-center justify-center gap-8">
        <div className="left-side flex flex-1 flex-col gap-8">
          <h1 className="slug">
            Welcome To The <span>Regenerative A.I</span> World
          </h1>
          <p className="home-desc">
          Optimum utilization of AI technology to discover potential DEX tokens.{" "}
          </p>
          <div className="flex   gap-4">
                <button  onClick={openPdfInNewTab} className="btn button">White Paper</button>
                <NavLink to="/learn-more" >
                <button style={{ background:"white", color:"black" }}  className="btn button">Learn More</button>
                  </NavLink> 
          </div>
         

        </div>
        <div className="right-side flex flex-1 justify-end">
          <div className="box-presale flex flex-col">
            <h1 className="title">$Reg AI Presale Has Ended</h1>
            <h3 className="sub-title">10% Regenerative A.I Tokens are Sold!</h3>
            <div className="box-body flex flex-col gap-4">
              <h1 className="numb">$50,000.00</h1>
              <p className="desc">Worth of BNB to be Added to liquidity</p>
              <h2 className="title2 text-center">TRADING BEGINS SOON</h2>
              <p className="desc2">
                Join our community to get the latest update.
              </p>
              <div className="social-btns flex items-center justify-center gap-2">
                <Link className="btn button" to="https://t.me/regenerativeai"><button>Telegram</button></Link>
                <Link className="btn button" to="https://x.com/RegAIWorld"><button>Twitter</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
