import { nunito, readexPro } from "@/utils/Font";
import React from "react";

const SingleWork = ({ work }) => {
  const { id, title, description } = work || {};
  return (
    <div className="gradient-border  px-[32px] py-[24px] w-full h-[300px] max-h-auto">
      <div className=" w-[64px] h-[64px]  gradient-border pb-[16px] flex justify-center items-center">
        <span
          className={`${readexPro.className} text-[32px] font-semibold textColor`}
        >
          {id}.
        </span>
      </div>
      <h2
        className={`subText text-[22px] font-semibold ${readexPro.className} pb-[10px]`}
      >
        {title}
      </h2>
      <p
        className={`text-[16px] font-medium workText ${nunito.className} text-justify leading-[24px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default SingleWork;
