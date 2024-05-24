"use client";
import Nav from "./Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Paragraph from "./Paragraph";
const Home = () => {
  const paragraph = {
    transition: `transition ease-linear delay-150 inline-block`,
  };

  const path = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [mouseMove, setMouseMove] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const mouseEnter = () => {
    setMouseMove(true);
  };
  const mouseLeave = () => {
    setMouseMove(false);
  };
  return (
    <div className=" h-screen relative ">
      <div className=" h-screen flex">
        <div className="bg-white flex-1 flex flex-col gap-2">
          <div className="items-center justify-between w-full">
            <Nav />
          </div>
          <div className="lg:flex hidden flex-col px-28 py-10 gap-4">
            <Paragraph
              mouseEnter={mouseEnter}
              mouseMove={mouseMove}
              mouseLeave={mouseLeave}
            />
            <div className="my-0">
              <p className="my-0 tracking-[3px] font-thin">
                Achyut Thapa is a full-stack developer from Koteshwor,
                specializing in creating comprehensive web solutions.
              </p>
            </div>
            <div className="m-0 ">
              <Link href={"/contact"}>
                <button className="py-2 px-8 bg-black text-white hover:shadow-2xl hover:rounded-lg">
                  Hire Me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 relative lg:flex hidden" id="bg_image">
          <ul className="flex absolute right-0 top-[25px] gap-2 px-5">
            <Link href={"https://github.com/achyutthapa7"} target="_blank">
              <GitHubIcon className=" text-2xl text-white opacity-80" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/achyut-thapa-023bb62a2/"}
              target="_blank"
            >
              <LinkedInIcon className=" text-2xl text-white opacity-80" />
            </Link>
            <Link
              href={"https://www.facebook.com/achyut.thapa.522 "}
              target="_blank"
            >
              <FacebookIcon className=" text-2xl text-white opacity-80" />
            </Link>
          </ul>
        </div>
      </div>

      <div className="lg:hidden w-full h-screen absolute top-0 bg-image">
        <ul className="flex absolute left-0 top-[20px] gap-2 px-5">
          <Link href={"https://github.com/achyutthapa7"} target="_blank">
            <GitHubIcon className=" text-2xl text-white" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/achyut-thapa-023bb62a2/"}
            target="_blank"
          >
            <LinkedInIcon className=" text-2xl text-white" />
          </Link>
          <Link
            href={"https://www.facebook.com/achyut.thapa.522 "}
            target="_blank"
          >
            <FacebookIcon className=" text-2xl text-white" />
          </Link>
        </ul>

        <div className="absolute right-8 top-[13px]">
          {isOpen ? (
            <MenuOutlinedIcon
              className="text-white text-4xl cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <CloseOutlinedIcon
              className="text-white text-4xl cursor-pointer"
              onClick={handleClick}
            />
          )}
        </div>

        <div
          className={`transition ease-in-out delay-150 w-[250px] absolute h-screen shadow-2xl ${
            isOpen ? "translate-x-[-100%]" : ""
          } flex flex-col bg-white/30 backdrop-blur-md border border-white/10 p-4 z-10`}
        >
          <Link
            href={"/"}
            className={`${
              path === "/" ? "text-blue-600 bg-white/20" : "text-gray-700"
            } p-3 rounded-lg mb-2 hover:bg-white/10 transition-colors`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`${
              path === "/about" ? "text-blue-600 bg-white/20" : "text-gray-700"
            } p-3 rounded-lg mb-2 hover:bg-white/10 transition-colors`}
          >
            About
          </Link>
          <Link
            href={"/myworks"}
            className={`${
              path === "/myworks"
                ? "text-blue-600 bg-white/20"
                : "text-gray-700"
            } p-3 rounded-lg mb-2 hover:bg-white/10 transition-colors`}
          >
            Portfolio
          </Link>
          <Link
            href={"/contact"}
            className={`${
              path === "/contact"
                ? "text-blue-600 bg-white/20"
                : "text-gray-700"
            } p-3 rounded-lg mb-2 hover:bg-white/10 transition-colors`}
          >
            Contact
          </Link>
        </div>

        <div className="md:w-6/12 sm:w-3/4 w-full h-[200px] bg-white/ absolute md:top-[15%] top-[35%] md:left-1/4 sm:left-[12.5%] ">
          <div className="my-0 flex flex-col items-center">
            <p className="tracking-[5px] text-[3em] font-thin text-white bg-gradient-to-l my-0">
              FULLSTACK
            </p>
            <p className="tracking-[5px] text-[3em] font-thin text-white bg-gradient-to-l my-0">
              DEVELOPER
            </p>
          </div>
          <div className="my-0 flex flex-col items-center p-3 bg-white/ backdrop-blur-3xl rounded-3xl shadow-xl">
            <p className="text-center text-gray-700 tracking-widest font-thin">
              Achyut Thapa is a full-stack developer from Koteshwor,
              specializing in creating comprehensive web solutions.
            </p>
          </div>

          <div className="m-0 flex justify-center my-5">
            <Link href={"/contact"}>
              <button className="py-2 px-8 bg-black text-white hover:shadow-2xl hover:rounded-lg">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bg-black w-full h-[140px] bottom-0 lg:flex md:flex hidden justify-evenly text-slate-200 items-end px-5 py-5">
        <div className="flex flex-col items-center relative circle left_circle gap-3">
          <p className="font-bold text-[12px] tracking-[1.1px]">RESEARCH</p>
          <span className="text-sm text-center font-thin tracking-[1.1px]">
            understanding user needs and market trends to inform project goals.
          </span>
        </div>
        <div className="flex flex-col items-center relative circle middle_circle gap-3 ">
          <p className="font-bold text-[12px] tracking-[1.1px]">PROTOTYPE</p>
          <span className="text-sm text-center font-thin tracking-[1.1px]">
            creates interactive models to test and refine concepts, ensuring
            optimal user experience.
          </span>
        </div>
        <div className="flex flex-col items-center relative circle right_circle gap-3 ">
          <p className="font-bold text-[12px] tracking-[1.1px]">CODE </p>
          <span className="text-sm text-center font-thin tracking-[1.1px]">
            develops robust, scalable solutions, turning prototypes into fully
            functional applications.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
