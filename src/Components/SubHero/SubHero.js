import { nunito, readexPro } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import position from "../../../public/assets/Group 8381.png";

const SubHero = () => {
  return (
    <div className="backgroundColor tracking-[20%] leading-[30px] text-white text-center py-[24px]">
      <div className="container mx-auto lg:px-0 px-5">
        <figure className=" absolute left-[91px] bottom-2">
          <Image src={position} alt="" width={100} height={100} />
        </figure>
        <figure className=" absolute right-[91px] top-[56px]">
          <Image src={position} alt="" width={100} height={100} />
        </figure>
        <p
          className={`text-[20px] font-medium  ${nunito.className}  text-center  text-white`}
        >
          The era when entrepreneurs had to endure sleepless nights & keep up
        </p>
        <p
          className={`text-[20px] font-medium  ${nunito.className}  text-center  text-white`}
        >
          {" "}
          with repetitive tasks is over!
        </p>
        <p
          className={`text-[20px] font-medium  ${nunito.className}  text-center  text-white`}
        >
          It’s time to:
        </p>
        <div className="flex  justify-center items-center gap-10 py-[49px]">
          <li className={`${readexPro.className} font-bold text-[32px]`}>
            Organize
          </li>
          <span className={`${readexPro.className} font-bold text-[32px]`}>
            &
          </span>
          <li className={`${readexPro.className} font-bold text-[32px]`}>
            Automate
          </li>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
