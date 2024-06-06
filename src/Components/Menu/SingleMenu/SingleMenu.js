import { nunito, readexPro } from "@/utils/Font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleMenu = ({ menu }) => {
  const { id, title, description, img } = menu || {};
  return (
    <div className="border-[1px] border-[#E9E3FC]   p-[24px] w-full h-[221px] max-h-auto rounded-[10px]">
      <div className="flex items-center gap-[6px] justify-start ">
        <div className={`w-[30px] h-[30px]`}>{img}</div>
        <Link
          href="#"
          className={`text-[22px] font-semibold ${readexPro.className}  text-[#333333]`}
        >
          {title}
        </Link>
      </div>
      <p
        className={`text-[16px] font-medium text-[#6F7782] ${nunito.className} text-start leading-[24px] pt-[16px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default SingleMenu;
