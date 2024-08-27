import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Staking from "../Pages/Staking";
import StakingPass from "../Pages/StakingPass";
import AdminForm from "../Pages/AdminForm";
import LearnMore from "../Pages/LearnMore";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/staking-pass" element={<StakingPass />} />
        <Route path="/admin-form" element={<AdminForm />} />
        <Route path="/learn-more" element={<LearnMore />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
