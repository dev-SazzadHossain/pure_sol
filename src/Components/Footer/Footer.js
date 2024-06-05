import React from "react";
import logo from "../../../public/assets/Main Logo.png";
import Image from "next/image";
import { nunito, readexPro } from "@/utils/Font";
import footer_logo from "../../../public/assets/footer.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-[120px] ">
      <div className="w-full flex justify-between lg:items-center">
        {/* logo  */}
        <Link href="/">
          <figure className="w-[242px] h-[46px]">
            <Image src={logo} alt="logo" width={242} height={46} />
          </figure>
        </Link>
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
              className={`text-[#6F7782]  font-medium ${nunito.className} text-[16px] pt-2`}
            >
              <Link href="/policy">Privacy Policy</Link>
            </li>
            <li
              className={`text-[#6F7782]  font-medium ${nunito.className} text-[16px] py-2`}
            >
              <Link href="/terms">Terms & Condition</Link>
            </li>
          </ul>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-[18px] pt-10 pb-10">
        <p
          className={`text-[#000000] font-medium ${nunito.className} text-[16px]`}
        >
          © Copyright 2024. All rights reserved by
        </p>
        <div className="mr-4">
          <Link href="/">
            <figure>
              <Image
                src={footer_logo}
                alt="Footer Logo"
                width={143}
                height={18}
              />
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
