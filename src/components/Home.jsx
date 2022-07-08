import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen ">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ">Hy my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Swayam Oswal
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] pb-5">
          I m Front End Developer
        </h2>
        <div>
          <button className="group text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Works{" "}
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineArrowRightAlt className="ml-2 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
