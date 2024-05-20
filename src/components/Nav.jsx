"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Nav = () => {
  const path = usePathname();
  return (
    <div className="flex gap-10 p-5">
      <Link
        href={"/"}
        className={` ${path === "/" ? "bg-white text-blue-600" : ""} `}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={` ${path === "/about" ? "bg-white text-blue-600" : ""}`}
      >
        About
      </Link>
      <Link
        href={"/myworks"}
        className={` ${path === "/myworks" ? "bg-white text-blue-600" : ""}`}
      >
        Portfolio
      </Link>
      <Link
        href={"/contact"}
        className={` ${path === "/contact" ? "bg-white text-blue-600" : ""}`}
      >
        Contact
      </Link>
    </div>
  );
};

export default Nav;
