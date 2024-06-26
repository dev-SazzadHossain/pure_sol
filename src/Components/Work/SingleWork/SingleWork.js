import { nunito, readexPro } from "@/utils/Font";
import Link from "next/link";
import React from "react";

const SingleWork = ({ work }) => {
  const { id, title, description } = work || {};
  return (
    <div className="  gradient-border  px-[32px] py-[24px] w-full h-[300px] ">
      <div className=" w-[64px] h-[64px]  gradient-border flex justify-center items-center ">
        <span
          className={`${readexPro.className} text-[32px] font-semibold textColor`}
        >
          {id}.
        </span>
      </div>
      <Link
        href="#"
        className={`subText text-[22px] font-semibold ${readexPro.className} pb-[10px] pt-[16px]  inline-block`}
      >
        {title}
      </Link>
      <p
        className={`text-[16px] font-medium workText ${nunito.className} text-justify leading-[24px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default SingleWork;
