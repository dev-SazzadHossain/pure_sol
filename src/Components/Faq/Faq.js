"use client";
import { nunito, readexPro } from "@/utils/Font";
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
        className={`text-[50px] font-bold ${readexPro.className} text-[#333333] text-center pb-[10px] transition-all duration-300 ease-in-out`}
      >
        Have a question?
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border p-4 rounded transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "backgroundColor text-white"
                : "bg-[#FAFAFC]"
            }`}
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => handleClick(index)}
            >
              <h2
                className={`text-[18px] font-semibold ${readexPro.className} ${
                  openIndex == index ? "text-white" : "text-[#333333]"
                }`}
              >
                {item.question}
              </h2>
              <span>
                {openIndex === index ? (
                  <Image src={minus} alt="minus" width={24} height={24} />
                ) : (
                  <Image src={plus} alt="plus" width={24} height={24} />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out  ${
                openIndex === index
                  ? `max-h-96 opacity-100  2xl:w-[520px] xl:w-[520px] lg:w-[520px] w-full pt-[10px] ${nunito.className} font-medium text-[16px]`
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
