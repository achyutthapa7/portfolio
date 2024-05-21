"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Nav = () => {
  const path = usePathname();
  return (
    <div className="flex gap-6 p-5 lg:justify-start justify-center w-full z-[10]">
      <Link href={"/"} className={` ${path === "/" ? "text-blue-600 " : ""} `}>
        Home
      </Link>
      <Link
        href={"/about"}
        className={` ${path === "/about" ? "text-blue-600 " : ""}`}
      >
        About
      </Link>
      <Link
        href={"/myworks"}
        className={` ${path === "/myworks" ? "text-blue-600 " : ""}`}
      >
        Portfolio
      </Link>
      <Link
        href={"/contact"}
        className={` ${path === "/contact" ? "text-blue-600 " : ""}`}
      >
        Contact
      </Link>
    </div>
  );
};

export default Nav;
