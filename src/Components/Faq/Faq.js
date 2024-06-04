"use client";
import { readexPro } from "@/utils/Font";
import React, { useState } from "react";
import minus from "../../../public/assets/minus.png";
import plus from "../../../public/assets/plus.png";
import Image from "next/image";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
  return (
    <div>
      <h1
        className={` text-[50px] font-bold ${readexPro.className} text-[#333333] text-center pb-[10px]`}
      >
        Have a question?
      </h1>
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px] ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-300 p-4 rounded   ${
              openIndex == index ? "backgroundColor" : "bg-[#FAFAFC]"
            }  border-none`}
          >
            <div className="cursor-pointer flex justify-between items-center">
              <h2
                className={`text-lg font-semibold ${
                  openIndex == index && "text-white"
                }`}
              >
                {item.question}
              </h2>
              <span onClick={() => handleClick(index)}>
                {openIndex === index ? (
                  <Image src={minus} alt="minus" />
                ) : (
                  <Image src={plus} alt="plus" />
                )}
              </span>
            </div>
            {openIndex === index && (
              <p className={` ${openIndex == index && "text-white"}`}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
