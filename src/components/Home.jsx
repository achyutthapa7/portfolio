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

const Home = () => {
  const para = useRef();
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
            <div className="my-0 flex flex-col">
              <p
                className={`my-0 text-[2em] font-bold text-slate-900 leading-10 inline-block tracking-[7.5px]`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <span
                  className={`transition ease-linear delay-150 inline-block ${
                    mouseMove ? "rotate-[12deg]" : ""
                  } ${mouseMove ? "translate-y-[-5px]" : ""}`}
                >
                  F
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  } ${mouseMove ? "translate-y-[2px]" : ""}`}
                >
                  U
                </span>
                <span
                  className={`transition ease-linear delay-150 inline-block ${
                    mouseMove ? "rotate-[12deg] " : ""
                  } ${mouseMove ? "translate-y-[-3px]" : ""}`}
                >
                  L
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  } ${mouseMove ? "translate-y-[3px]" : ""}`}
                >
                  L
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[12deg]" : ""
                  } ${mouseMove ? "translate-y-[-2px]" : ""}`}
                >
                  S
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  } ${mouseMove ? "translate-y-[-1px]" : ""}`}
                >
                  T
                </span>
                <span
                  className={`transition ease-linear delay-150 inline-block ${
                    mouseMove ? " rotate-[12deg] " : ""
                  } ${mouseMove ? "translate-y-[2.3px]" : ""}`}
                >
                  A
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  } ${mouseMove ? "translate-y-[-5px]" : ""}`}
                >
                  C
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  } ${mouseMove ? "translate-y-[5px]" : ""}`}
                >
                  K
                </span>
              </p>
              <p
                className={`my-0 text-[2em] font-bold text-slate-900 leading-10 inline-block tracking-[7.5px]`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <span
                  className={`transition ease-linear delay-150 inline-block ${
                    mouseMove ? "rotate-[12deg]" : ""
                  } ${mouseMove ? "translate-y-[-10px]" : ""}`}
                >
                  D
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  }`}
                >
                  E
                </span>
                <span
                  className={`transition ease-linear delay-150 inline-block ${
                    mouseMove ? "rotate-[12deg] " : ""
                  } ${mouseMove ? "translate-y-[-7px]" : ""}`}
                >
                  V
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  }`}
                >
                  E
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[12deg]" : ""
                  } ${mouseMove ? "translate-y-[-9px]" : ""}`}
                >
                  L
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  } ${mouseMove ? "translate-y-[-6px]" : ""}`}
                >
                  O
                </span>
                <span
                  className={`transition ease-linear delay-150 inline-block ${
                    mouseMove ? " rotate-[12deg] " : ""
                  }`}
                >
                  P
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  } ${mouseMove ? "translate-y-[-10px]" : ""}`}
                >
                  E
                </span>
                <span
                  className={`transition ease-linear delay-150  inline-block ${
                    mouseMove ? "rotate-[-10deg]" : ""
                  }`}
                >
                  R
                </span>
              </p>
            </div>
            <div className="my-0">
              <p className="my-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus non in, iusto consequuntur, modi voluptatibus enim
              </p>
            </div>
            <div className="m-0">
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
        <div className="absolute right-0 px-10 py-10">
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
          } flex flex-col bg-white/30 backdrop-blur-md border border-white/10 p-4`}
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
      </div>

      <div className="absolute bg-black w-full h-[140px] bottom-0 lg:flex hidden justify-evenly text-slate-200 items-end px-20 py-5">
        <div className="flex flex-col items-center relative circle left_circle gap-3 ">
          <p className="font-bold text-[12px]">RESEARCH</p>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur?
          </span>
        </div>
        <div className="flex flex-col items-center relative circle middle_circle gap-3 ">
          <p className="font-bold text-[12px]">PROTOTYPE</p>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur?
          </span>
        </div>
        <div className="flex flex-col items-center relative circle right_circle gap-3 ">
          <p className="font-bold text-[12px]">CODE </p>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
