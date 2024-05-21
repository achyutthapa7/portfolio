import Nav from "./Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
const Home = () => {
  return (
    <div className=" h-screen relative ">
      <div className=" h-screen flex">
        <div className="bg-white flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <Nav />
          </div>
          <div className="flex flex-col px-28 py-10 gap-4 lg:flex hidden">
            <div className="my-0">
              <p className="my-0 text-[2.5em] font-bold text-slate-900 tracking-[2px] leading-10">
                FULLSTACK
              </p>
              <p className="my-0 text-[2.5em] font-bold text-slate-900 tracking-[2px] ">
                DEVELOPER
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
                <button className="py-2 px-8 bg-black text-white">
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

      <div className="lg:hidden w-full h-screen absolute top-0 bg-image border-2 border-black flex items-center ">

        <div className="w-[100px] h-[100px] border-2 border-black"></div>
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
