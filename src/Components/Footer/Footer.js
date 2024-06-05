import React from "react";
import logo from "../../../public/assets/Main Logo.png";
import Image from "next/image";
import { readexPro } from "@/utils/Font";

const Footer = () => {
  return (
    <div className="py-[120px] ">
      <div className="w-full flex justify-between lg:items-center">
        {/* logo  */}
        <figure className="w-[242px] h-[46px]">
          <Image src={logo} alt="logo" width={242} height={46} />
        </figure>
        <ul className="lg:flex gap-20">
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            How Does it Work?
          </li>
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            Solutions
          </li>
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            Pricing
          </li>
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            Help
          </li>
          <ul>
            <li
              className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
            >
              Legal
            </li>
            <li
              className={`text-[#6F7782]  font-semibold ${readexPro.className} text-[16px] pt-2`}
            >
              Privacy Policy
            </li>
            <li
              className={`text-[#6F7782]  font-semibold ${readexPro.className} text-[16px] py-2`}
            >
              Terms & Condition
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
