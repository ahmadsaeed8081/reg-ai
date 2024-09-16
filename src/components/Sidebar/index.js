import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon } from "../../assets/Icons";


import { useWeb3Modal,useWeb3ModalTheme,use } from '@web3modal/wagmi/react'
import { useAccount, useReadContract, useWriteContract } from "wagmi";


const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  console.log("openSidebar....", openSidebar);
  const navBarItems = [
    { lbl: "Home", slug: "/" },
    {
      lbl: "About us",
      slug: "#aboutus",
    },
    { lbl: "Staking", slug: "/staking" },
    { lbl: "Staking Pass", slug: "/staking-pass" },

    { lbl: "Road Map", slug: "#roadmap" },
    { lbl: "Tokenomics", slug: "/" },
  ];


  const { open, close } = useWeb3Modal()
  const { isConnected,isDisconnected,chain } = useAccount()
  const { address } = useAccount();


  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.body.style.overflowY = "auto";
      setOpenSidebar(false);
    });
  }, []);

  return (
    <div
      className={`sidebar-s fixed rel anim ${openSidebar ? "show" : "hide"}`} 
    >
      <div
        className={`side-block flex col anim ${openSidebar ? "show" : "hide"}`} 
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="hdr flex items-center justify-between gap-2">
          <div className="hdr-tag">
            <img src="./images/logo.svg" className=" h-14" />
          </div>
          <div
            className="icon-close flex aic jc"
            onClick={(e) => {
              setOpenSidebar(false);
            }}
          >
            <CloseIcon />
          </div>
        </div>
        <div>
          <div className="items flex aic flex-col">
            <>
              {navBarItems.map((item, index) => (
                <Link
                  to={item.slug}
                  className={`list-item flex `}
                  onClick={(e) => {
                    setOpenSidebar(false);
                  }}
                >
                  {/* <div className="icon flex items-start justify-center mr-3">
                  {item.icon}
                </div> */}
                  <div className="li">{item.lbl}</div>
                </Link>
              ))}
            </>
            <button onClick={() => open()}  className="btn-stack button">
            {!isConnected?("Connect Wallet"):(address.slice(0,4)+"...."+address.slice(39,42))}

          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
