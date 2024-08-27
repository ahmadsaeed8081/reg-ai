import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Wrapper from "../../routes/Wrapper";

import Faqs from "./Faqs";

const LearnMore = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <div className=" bg-themeColor min-h-screen flex flex-col">

        <Faqs />
        {/* <Modal open={open} onClose={() => setOpen(false)}>
          <TableRowModel setOpen={setOpen} item={modelData} />
        </Modal> */}
      </div>
    </Wrapper>
  );
};

export default LearnMore;
