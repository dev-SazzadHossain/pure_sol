import { nunito, readexPro } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import img from "../../../public/assets/Group 8402.png";

const MoneyBack = () => {
  return (
    <div className="backgroundColor py-[40px] rounded-[50px] relative">
      <figure className=" absolute bottom-[16px] left-[30px] w-[75px] h-[91px]">
        <Image src={img} alt="image" />
      </figure>
      <figure className=" absolute top-[30px] right-[32px] w-[75px] h-[91px]">
        <Image src={img} alt="image" />
      </figure>
      <h3
        className={` text-center text-[20px] font-bold ${readexPro.className} text-white tracking-widest`}
      >
        still not sure?
      </h3>
      <div className=" leading-[60px] py-[32px]">
        <h1
          className={` font-semibold text-center text-white ${readexPro.className} text-[50px]`}
        >
          100% Money Back
        </h1>
        <h2
          className={` font-semibold text-center text-white ${readexPro.className} text-[50px]`}
        >
          Guarantee
        </h2>
      </div>
      <p
        className={`${nunito.className} font-medium text-[16px] leading-[24px] lg:w-[500px] mx-auto text-white text-center`}
      >
        We are so confident in our services that we offer a 30-day money-back
        guarantee. Should you find our service unsatisfactory, we guarantee a
        full refund and complete system rollback.
      </p>
    </div>
  );
};

export default MoneyBack;
