import Faq from "@/Components/Faq/Faq";
import MoneyBack from "@/Components/MoneyBack/MoneyBack";
import { nunito, readexPro } from "@/utils/Font";
import React from "react";
import name from "../../../public/assets1/assets/unique_1.png";
import phone from "../../../public/assets1/assets/call_icons.png";
import email from "../../../public/assets1/assets/email_icon.png";
import subject from "../../../public/assets1/assets/group_4.png";
import edit from "../../../public/assets1/assets/group_3.png";
import Image from "next/image";
import Person from "@/utils/svg/person";
import Phone from "@/utils/svg/phone";
import Email from "@/utils/svg/email";
import Subject from "@/utils/svg/subject";
import Edit from "@/utils/svg/edit";
const page = () => {
  return (
    <div className="2xl:container mx-auto xl:container lg:container md:container sm:container container px-5 2xl:px-0 xl:px-0 lg:px-0">
      <div className="lg:flex  justify-between py-20 ">
        <div className="lg:w-1/2 ">
          <h4
            className={`${readexPro.className} text-[20px] font-semibold textColor pb-5`}
          >
            Contact us
          </h4>
          <h2
            className={`${readexPro.className} text-[50px] font-semibold text-[#4A326F]`}
          >
            Have cool project
          </h2>
          <h3
            className={`${readexPro.className} text-[50px] font-semibold text-[#4A326F] pb-5`}
          >
            Get in touch!
          </h3>
          <p
            className={`${nunito.className} text-[16px] font-normal tracking-tight text-[#6F7782] lg:w-[500px] leading-[30px]`}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,
          </p>
        </div>

        <form className="lg:w-1/2 border border-[#926efb] shadow shadow-[#754DE9]/20 p-[36px] rounded-[10px]">
          <div>
            <div className="flex items-center border-[1px] border-[#E9E3FC] rounded-[10px]">
              <div className="pl-4">
                <Person />
              </div>
              <div className="pl-2">
                <input
                  className="py-[20px] outline-none w-full "
                  type="text"
                  placeholder="Your Placeholder Text"
                  aria-label="Full name"
                />
              </div>
            </div>
          </div>

          {/* phone */}
          <div className="pt-5">
            <div className="flex items-center border-[1px] border-[#E9E3FC] rounded-[10px]">
              <div className="pl-4">
                <Phone />
              </div>
              <div className="pl-2">
                <input
                  className="py-[20px] outline-none w-full "
                  type="text"
                  placeholder="Phone"
                  aria-label="Full name"
                />
              </div>
            </div>
          </div>

          {/* email */}
          <div className="pt-5">
            <div className="flex items-center border-[1px] border-[#E9E3FC] rounded-[10px]">
              <div className="pl-4">
                <Email />
              </div>
              <div className="pl-2">
                <input
                  className="py-[20px] outline-none w-full "
                  type="email"
                  placeholder="Your email address"
                  aria-label="Full name"
                />
              </div>
            </div>
          </div>

          {/* subject */}
          <div className="pt-5">
            <div className="flex items-center border-[1px] border-[#E9E3FC] rounded-[10px]">
              <div className="pl-4">
                <Subject />
              </div>
              <div className="pl-2">
                <input
                  className="py-[20px] outline-none w-full "
                  type="text"
                  placeholder="Subject"
                  aria-label="Full name"
                />
              </div>
            </div>
          </div>
          {/* message */}

          <div className="pt-5">
            <div className="flex border-[1px] border-[#E9E3FC] rounded-[10px] pt-3">
              <div className="pl-4 ">
                <Edit />
              </div>
              <div className="pl-2 w-full">
                <textarea
                  className=" outline-none w-full  "
                  type="email"
                  placeholder="How can we help you? Feel free to get touch!"
                  aria-label="Full name"
                  rows={6}
                />
              </div>
            </div>
          </div>

          {/* button */}
          <div className="flex justify-center items-center pt-10">
            <button className="px-[50px] py-[15px] rounded-[58px] backgroundColor text-white">
              Get In Touch
            </button>
          </div>
        </form>
      </div>

      <MoneyBack />
      <Faq />
    </div>
  );
};

export default page;
