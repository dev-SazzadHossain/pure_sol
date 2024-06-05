import Image from "next/image";
import React from "react";
import icons from "../../../../public/assets/Basic Plan.png";
import { nunito, readexPro } from "@/utils/Font";
import rihgtIcons from "../../../../public/assets/Right Icon.png";
import Link from "next/link";

const PricingCard = ({ item }) => {
  const { items, id, buttonText } = item || {};
  return (
    <div className="py-[32px] px-[24px] border-[1px] border-[#E9E3FC] rounded-[12px] ">
      <div
        className={`flex items-center justify-center text-[30px] font-semibold ${readexPro.className}`}
      >
        <h2>$2748</h2>{" "}
        <span className="text-[#6F7782] text-[12px]">/month</span>
      </div>
      <h3
        className={`font-semibold ${readexPro.className} text-[18px] text-center text-[#333333]`}
      >
        Build on Earth
      </h3>
      <div className="flex items-center justify-center gap-2">
        <h4
          className={`font-semibold ${readexPro.className} text-[12px] text-center text-[#333333]`}
        >
          Starter package
        </h4>
        <figure>
          <Image src={icons} alt="icons" />
        </figure>
      </div>
      <div className="pt-[32px]">
        {/* one items */}
        <div className="flex items-center gap-2">
          <figure>
            <Image src={rihgtIcons} alt="rightIcons" />
          </figure>{" "}
          <li
            className={`text-[##6F7782] ${nunito.className} text-[16px] font-medium`}
          >
            <Link href="#"> {item?.items[0]}</Link>
          </li>
        </div>
        {/* one items */}
        {/* one items */}
        <div className="flex items-center gap-2 py-2">
          <figure>
            <Image src={rihgtIcons} alt="rightIcons" />
          </figure>{" "}
          <li
            className={`text-[##6F7782] ${nunito.className} text-[16px] font-medium`}
          >
            <Link href="#"> {item?.items[1]}</Link>
          </li>
        </div>
        {/* one items */}
        {/* one items */}
        <div className="flex items-center gap-2 py-2">
          <figure>
            <Image src={rihgtIcons} alt="rightIcons" />
          </figure>{" "}
          <li
            className={`text-[##6F7782] ${nunito.className} text-[16px] font-medium`}
          >
            <Link href="#"> {item?.items[2]}</Link>
          </li>
        </div>
        {/* one items */}
        {/* one items */}
        <div className="flex items-center gap-2 py-2">
          <figure>
            <Image src={rihgtIcons} alt="rightIcons" />
          </figure>{" "}
          <li
            className={`text-[##6F7782] ${nunito.className} text-[16px] font-medium`}
          >
            <Link href="#"> {item?.items[3]}</Link>
          </li>
        </div>
        {/* one items */}
        {/* one items */}
        <div className="flex items-center gap-2 py-2">
          <figure>
            <Image src={rihgtIcons} alt="rightIcons" />
          </figure>{" "}
          <li
            className={`text-[##6F7782] ${nunito.className} text-[16px] font-medium`}
          >
            <Link href="#"> {item?.items[4]}</Link>
          </li>
        </div>
        {/* one items */}
        {/* one items */}
        {item?.items.length == 5 ? (
          ""
        ) : (
          <div className="flex items-center gap-2">
            <figure>
              <Image src={rihgtIcons} alt="rightIcons" />
            </figure>{" "}
            <li
              className={`text-[##6F7782] ${nunito.className} text-[16px] font-medium`}
            >
              <Link href="#"> {item?.items[5]}</Link>
            </li>
          </div>
        )}
        {/* one items */}

        <div className="flex justify-center items-center pt-[32px]">
          <button
            className={`px-[36px] py-[12px] ${
              item?.id == 3
                ? "border-[#333333] border-[1px] shadow-[0_4px_6px_-1px_rgba(117,77,233,0.15),_0_2px_4px_-2px_rgba(117,77,233,0.15)] font-semibold text-[15px] "
                : "button_bg text-white border-[1px] border-[#4A326F]"
            } rounded-[16px]  text-[16px] font-semibold  ${nunito.className} `}
          >
            {item?.buttonText}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center pt-[10px]">
          <small className="text-[10px] font-medium text-[#6F7782]">
            no subscription!
          </small>
          <small className="text-[10px] font-medium text-[#6F7782]">
            buy as needed
          </small>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
