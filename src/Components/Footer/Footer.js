import React from "react";
import logo from "../../../public/assets1/assets/main_logo.svg";
import Image from "next/image";
import { nunito, readexPro } from "@/utils/Font";
import footer_logo from "../../../public/assets/footer.png";
import Link from "next/link";
import MainLogo from "@/utils/svg/MainLogo";

const Footer = () => {
  return (
    <>
      {" "}
      <div className=" w-full flex justify-between lg:items-center gap-5">
        {/* logo  */}
        <Link href="/">
          <div className="w-[242px] h-[46px]">
            <MainLogo />
          </div>
        </Link>
        <ul className="lg:flex gap-20">
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            <Link href="#work">How Does it Work?</Link>
          </li>
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            <Link href="#solution"> Solutions</Link>
          </li>
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            <Link href="#pricing"> Pricing</Link>
          </li>
          <li
            className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
          >
            <Link href="#">Help</Link>
          </li>
          <ul>
            <li
              className={`text-[#754DE9]  font-semibold ${readexPro.className} text-[18px]`}
            >
              <Link href="#"> Legal</Link>
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
    </>
  );
};

export default Footer;
