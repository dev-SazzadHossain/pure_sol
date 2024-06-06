import { nunito, readexPro } from "@/utils/Font";
import Image from "next/image";
import React from "react";
import position from "../../../public/assets1/assets/group_1.png";

const SubHero = () => {
  return (
    <div className="2xl:container mx-auto xl:container lg:container md:container sm:container container relative  px-5 2xl:px-0 xl:px-0 lg:px-0">
      <div className=" tracking-[20%] leading-[30px] text-white text-center py-[24px]">
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
