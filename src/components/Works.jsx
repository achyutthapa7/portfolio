"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Sidebar from "./Sidebar";

const Works = () => {
  const [isOpen, setIsOpen] = useState(true);

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
    </div>
  );
};

export default Works;
