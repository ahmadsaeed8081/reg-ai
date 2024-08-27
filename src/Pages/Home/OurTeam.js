import React from "react";

const OurTeam = () => {
  return (
    <div className="our-team-section flex">
      <div className="wrap wrapWidth flex flex-col gap-8">
        <h1 className="text-white font-medium text-2xl text-center">
          OUR TEAM
        </h1>
        <div className="team-grid w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 mb-8">
          <div
            className="user-card flex flex-col justify-end"
            style={{ backgroundImage: `url(/images/team1.png)` }}
          >
            <h1 className="name text-white inter font-medium">
              Charlee Mangar
            </h1>
            <p className="text-[#D3D4E0] text-xs  border-b-[2px] border-[#21FFD6] w-max">
              Marketing Head
            </p>
          </div>
          <div
            className="user-card flex flex-col justify-end"
            style={{ backgroundImage: `url(/images/team2.png)` }}
          >
            <h1 className="name text-white inter font-medium">Dinaval Jall</h1>
            <p className="text-[#D3D4E0] text-xs  border-b-[2px] border-[#21FFD6] w-max">
              Technical Advisor
            </p>
          </div>  
          <div
            className="user-card flex flex-col justify-end"
            style={{ backgroundImage: `url(/images/team3.png)` }}
          >
            <h1 className="name text-white inter font-medium">
              Robert Peterson
            </h1>
            <p className="text-[#D3D4E0] text-xs  border-b-[2px] border-[#21FFD6] w-max">
              PR Manager
            </p>
          </div>
          <div
            className="user-card flex flex-col justify-end"
            style={{ backgroundImage: `url(/images/team4.png)` }}
          >
            <h1 className="name text-white inter font-medium">Carleno Emo</h1>
            <p className="text-[#D3D4E0] text-xs  border-b-[2px] border-[#21FFD6] w-max">
              Social Media Associate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
