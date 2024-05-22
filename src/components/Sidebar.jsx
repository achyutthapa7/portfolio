// components/Sidebar.js
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen }) => {
  const path = usePathname();

  return (
    <div
      className={`transition ease-in-out delay-150 w-[250px] absolute h-screen shadow-2xl ${
        isOpen ? "translate-x-[-100%]" : ""
      } flex flex-col bg-white/30 backdrop-blur-md border border-white/10 p-4`}
    >
      <SidebarLink href="/" label="Home" active={path === "/"} />
      <SidebarLink href="/about" label="About" active={path === "/about"} />
      <SidebarLink
        href="/myworks"
        label="Portfolio"
        active={path === "/myworks"}
      />
      <SidebarLink
        href="/contact"
        label="Contact"
        active={path === "/contact"}
      />
    </div>
  );
};

const SidebarLink = ({ href, label, active }) => {
  return (
    <Link
      href={href}
      className={`${
        active ? "text-blue-600 bg-white/20" : "text-gray-700"
      } p-3 rounded-lg mb-2 hover:bg-white/10 transition-colors`}
    >
      {label}
    </Link>
  );
};

export default Sidebar;
