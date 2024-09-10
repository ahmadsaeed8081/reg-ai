import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Wrapper from "../../routes/Wrapper";
import HeroSection from "./HeroSection";
import About from "./About";
import RoadMap from "./RoadMap";
import GenerativeAi from "./GenerativeAi";
import OurTeam from "./OurTeam";
import Faqs from "./Faqs";
import Brands from "../../components/Brands";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <div className="lading-page bg-themeColor min-h-screen flex flex-col">
        <HeroSection />
        <Brands/>
        <About />
        <RoadMap />
        <GenerativeAi />
        {/* <OurTeam /> */}
        <Faqs />
        {/* <Modal open={open} onClose={() => setOpen(false)}>
          <TableRowModel setOpen={setOpen} item={modelData} />
        </Modal> */}
      </div>
    </Wrapper>
  );
};

export default Main;
