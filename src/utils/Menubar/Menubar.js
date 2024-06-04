"use client";
import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Menubar = ({ open, setOpen }) => {
  return (
    <div>
      {/* Hamburger icon\*/}
      {!open ? (
        <div
          onClick={() => setOpen(true)}
          className=" transition-all duration-300"
        >
          <CiMenuBurger size="30px" />
        </div>
      ) : (
        <div
          onClick={() => setOpen(false)}
          className=" transition-all duration-300"
        >
          <RxCross1 size="30px" />
        </div>
      )}
    </div>
  );
};

export default Menubar;
