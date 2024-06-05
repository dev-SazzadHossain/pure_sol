import CustomButton from "@/utils/CustomButton/CustomButton";
import { nunito } from "@/utils/Font";
import { Readex_Pro } from "next/font/google";
import Link from "next/link";
import React from "react";
const readexPro = Readex_Pro({ subsets: ["latin"] });
const Hero = () => {
  return (
    <>
      {" "}
      <div className=" leading-[90px]">
        <h1
          className={`${readexPro.className} text-[64px] font-bold text-[#4A326F] text-center`}
        >
          Scale your business
        </h1>
        <h3
          className={`${readexPro.className} text-[40px] font-bold text-[#4A326F] text-center`}
        >
          with <span className="textColor">AI</span>-driven systems
        </h3>
      </div>
      <p
        className={` max-w-full w-[600px]  px-10 text-[#6F7782] font-semibold leading-[30px] text-center mx-auto ${nunito.className} py-[36px]`}
      >
        We build digital systems & automations to jumpstart your scaling to 3x
        and more...
      </p>
      <div className="text-center">
        <Link
          href="/contact"
          className={` shadow shadow-[#9747FF] p-custom  rounded-[10px] font-semibold text-[16px] ${nunito.className}`}
        >
          Book a discovery call
        </Link>
      </div>
    </>
  );
};

export default Hero;
