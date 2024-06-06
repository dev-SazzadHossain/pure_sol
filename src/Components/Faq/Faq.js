"use client";
import { nunito, readexPro } from "@/utils/Font";
import React, { useState } from "react";
import minus from "../../../public/assets/minus.png";
import plus from "../../../public/assets/plus.png";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What kind of automation solutions do you provide?",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
  {
    question: "How does the 30-day money-back guarantee work?",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
  {
    question: "What is included in your packages?",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
  {
    question: "Why is your service better?",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
  {
    question: "What happens during the onboarding meeting?",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
  {
    question: "What training do you provide with your services?",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
  {
    question: "How do you handle request & Revisions?",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
  {
    question: "XXXXXXXXXXX",
    answer:
      "Vitae scelerisque nec nunc eget. Feugiat eget ut venenatis amet vulputate amet urna ut. Risus viverra ac risus vulputate sit amet parturien.",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pb-[120px]">
      <h1
        className={`text-[50px] font-semibold ${readexPro.className} text-[#333333] text-center pb-[10px] transition-all duration-300 ease-in-out`}
      >
        Have a question?
      </h1>

      <div className="faq-section mx-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[10px] ">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item transition-all duration-300 ease-linear rounded-md"
            >
              <div
                className={`flex items-center justify-between cursor-pointer px-10 py-10  rounded-t-md  ${
                  openIndex === index
                    ? "faqColor text-white"
                    : "bg-[#FAFAFC] rounded-b-md"
                }`}
                onClick={() => handleClick(index)}
              >
                <h3
                  className={`faq-question text-[18px] font-semibold ${
                    openIndex == index ? "" : "text-[#333333]"
                  } ${readexPro.className} `}
                >
                  {item.question}
                </h3>
                <span>
                  {openIndex !== index ? (
                    <div className="w-[30px] h-[30px] faqColor flex items-center justify-center rounded-full">
                      <FiPlus color="white" size={30} />
                    </div>
                  ) : (
                    <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full">
                      <FiMinus color="black" size={30} />
                    </div>
                  )}
                </span>
              </div>
              <div
                className={`faq-answer overflow-hidden transition-all duration-300 ease-linear ${nunito.className} text-[16px] leading-[30px] rounded-b-md `}
                style={{
                  maxHeight: openIndex === index ? "100px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <div
                  className={`${
                    openIndex == index ? "faqColor  text-white" : ""
                  } px-10  pb-10 `}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
