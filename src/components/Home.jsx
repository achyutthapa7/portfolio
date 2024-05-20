import Nav from "./Nav";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import mernlogo from "../../src/images/mernlogo.jpg";
const Home = () => {
  const path = usePathname();

  return (
    <div className=" h-screen relative">
      <div className=" h-screen flex">
        <div className="bg-white flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <Nav />
          </div>

          <div className="flex flex-col px-28 py-10 gap-4">
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
                minus mollitia maiores voluptatem laboriosam aliquam aliquid
                accusantium consectetur cumque a praesentium. Qui, voluptate.
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
        <div className="flex-1 relative" id="bg_image">
          <ul className="flex absolute right-0 top-[25px] gap-4">
            <li>icon1</li>
            <li>icon2</li>
            <li>icon3</li>
          </ul>
        </div>
      </div>
      <div className="absolute bg-black w-full h-[100px] bottom-0"></div>
    </div>
  );
};

export default Home;
