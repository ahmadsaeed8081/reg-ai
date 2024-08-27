import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon } from "../../assets/Icons";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  console.log("openSidebar....", openSidebar);
  const navBarItems = [
    { lbl: "Home", slug: "/" },
    {
      lbl: "About us",
      slug: "#aboutus",
    },
    { lbl: "Staking", slug: "/staking" },
    { lbl: "Road Map", slug: "#roadmap" },
    { lbl: "Tokenomics", slug: "/" },
  ];

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
            <Link
              to="/staking-pass"
              className="btn-stack button w-full rounded-md inter"
            >
              Staking Pass
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
