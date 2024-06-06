"use client";
import { Nunito, Readex_Pro } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/assets1/assets/main_logo.svg";
import Link from "next/link";
import Menubar from "@/utils/Menubar/Menubar";

const readexPro = Readex_Pro({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="2xl:container mx-auto xl:container lg:container md:container sm:container container relative py-10 px-5 2xl:px-0 xl:px-0 lg:px-0">
      <nav className="flex justify-between items-center ">
        <Link href="/" className="w-full">
          {/* logo  */}
          <figure className="w-[242px] h-[46px]">
            <Image src={logo} alt="logo" width={242} height={46} />
          </figure>
        </Link>
        {/* navList */}
        <div className={`w-full relative text-center ${readexPro.className}`}>
          <ul
            className={`lg:flex hidden lg:items-center justify-center gap-10`}
          >
            <li className=" text-[18px] font-normal text-[#4A326F]">
              <Link href="#work">How does it work?</Link>
            </li>
            <li className=" text-[18px] font-normal text-[#4A326F]">
              <Link href="#solution">Solutions</Link>
            </li>
            <li className=" text-[18px] font-normal text-[#4A326F]">
              <Link href="#pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        {/* navList */}
        {/* button */}
        <div className="lg:block text-end hidden w-full">
          <Link
            href="/contact"
            className={` border border-[#926efb] shadow shadow-[#754DE9]/20 p-custom  rounded-[10px] font-semibold text-sm ${nunito.className}`}
          >
            Book a discovery call
          </Link>
        </div>
        {/* button */}

        {/* Mobile Menu */}
        <div className=" lg:hidden block ">
          <Menubar open={open} setOpen={setOpen} />
        </div>
      </nav>

      {/* Conditional */}
      {open && (
        <div className=" absolute top-[100%] shadow-md shadow-[rgba(117, 77, 233, 0.2)] w-[200px] text-center p-5 right-5 rounded-md transition-all duration-300 z-40 bg-slate-300">
          <ul className={`lg:flex  lg:items-center gap-10`}>
            <li className=" text-[18px] font-normal text-[#4A326F]">
              <Link href="#work">How does it work?</Link>
            </li>
            <li className=" text-[18px] font-normal text-[#4A326F] py-5">
              <Link href="#solution">Solutions</Link>
            </li>
            <li className=" text-[18px] font-normal text-[#4A326F]">
              <Link href="#pricing">Pricing</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
