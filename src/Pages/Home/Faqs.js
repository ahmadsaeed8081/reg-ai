import React, { useState } from "react";
import { ArrowDownIcon } from "../../assets/Icons";

const Faqs = () => {
  const faqs = [
    {
      question: "What cryptocurrencies can I use to purchase?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more",
    },
    {
      question: "How can I participate in the A.I Token sale?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more",
    },
    {
      question: "How do I benefit from the A.I Token?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more",
    },
    {
      question: "How do I benefit from the A.I Token?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more",
    },
  ];
  const FaqsList = ({ item, index }) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="faq flex flex-col gap-1">
        <div className="faq-meta flex items-center justify-between w-full">
          <h1 className="question inter">{item.question}</h1>
          <button
            className="icon flex items-center justify-center"
            onClick={(e) => setOpen(!open)}
          >
            <ArrowDownIcon />
          </button>
        </div>
        <p
          className={`answer text-white font-light text-xs ${
            open ? "open" : ""
          }`}
        >
          {item.answer}
        </p>
      </div>
    );
  };
  return (
    <div className="faqs-section flex">
      <div className="wrap wrapWidth flex gap-10">
        <div className="meta-side flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-4">
            <div className="border-b border-white w-10"></div>
            <h1 className="text-white text-sm font-normal">FAQS</h1>
          </div>
          <h1 className="text-white text-2xl font-semibold">
            Frenquently Questions
          </h1>
          <h3 className="text-sm font-normal text-white">What is A.I Token?</h3>
          <p className="text-white inter text-sm font-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more
          </p>
          <div className="faqs-list flex flex-col gap-2">
            {faqs.map((item, index) => (
              <FaqsList item={item} index={index} />
            ))}
          </div>
        </div>
        <div className="image-side flex flex-1 justify-end items-center">
          <img src="./images/faq.png" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
