import React, { useState } from "react";

import { ArrowDownIcon } from "../assets/Icons";
import moment from "moment";

const DropDown_rew = ({ dropDownList, selectedValue, setSelectedValue }) => {
  const [hide, setHide] = useState(false);

  const count1 = (time) => {
    const now = new Date(time*1000);
  
    const t=moment(now).fromNow();
    return t;
    
  };



  return (
    <div className="dropDown flex items-center justify-center flex-col relative">
      <div className="category flex items-center">
        <div
          className="cbox cleanbtn flex items-center relative pointer"
          onClick={(e) => {
            e.stopPropagation();
            setHide(!hide);
          }}
        >
          <div className="slt flex items-center">
            <div className="unit-name flex items-center font s14 b4">
              <span
                className="unit-eng flex items-center font s14 b4"
                placeholder="Plano"
              >
                {selectedValue ? Number(selectedValue[0])/10**18 : ""}
              </span>
            </div>
          </div>

          <div className="arrow-icon flex items-center justify-center">
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <div className={`block flex aic abs ${hide ? "show" : ""}`}>
        <div className="manue flex aic col anim">
          {dropDownList.map((item, index) => (
            <div
              key={index}
              className="slt flex items-center gap-1 justify-between"
              onClick={(e) => {
                setHide(!hide);
                setSelectedValue(item);
              }}
            >
              <div className="unit-name flex aic font s14 b4">
                <span className="unit-eng flex aic font s14 b4">
                  {Number(item[0])/10**18}
                </span>
              </div>
              <div className="unit-name flex items-center font-normal text-xs">
                <span className="unit-eng flex aic font s14 b4">
                  {count1(Number(item[1]))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown_rew;
