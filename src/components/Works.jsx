"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Sidebar from "./Sidebar";
import Card from "./Card";

const Works = () => {
  const [isOpen, setIsOpen] = useState(true);
  const works = [...Array(10)];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Nav />
      <div className="lg:hidden w-full h-screen absolute top-0">
        <div className="absolute right-0 px-10 py-10">
          {isOpen ? (
            <MenuOutlinedIcon
              className="text-black text-4xl cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <CloseOutlinedIcon
              className="text-black text-4xl cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>
        <Sidebar isOpen={isOpen} />
      </div>
      <div className="w-full h-screen lg:flex hidden flex-col gap-5 p-5 ">
        <p className="text-3xl font-thin tracking-wide">My Works</p>
        <div className="relative flex h-screen">
          <div className="flex-1 "></div>
          <div className="flex-1"></div>

          <span id="divider"></span>
        </div>
      </div>
    </div>
  );
};

export default Works;
