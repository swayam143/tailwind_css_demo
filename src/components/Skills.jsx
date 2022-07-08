import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { TiCss3 } from "react-icons/ti";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 pb-1 inline-block ">
            Skills
          </p>
          <p className="py-4">These are the Technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <AiFillHtml5 size={70} className="mx-auto text-[orange]" />
            <p className="my-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <TiCss3 size={70} className="mx-auto text-[orange]" />
            <p className="my-4">Css</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiTailwindcss size={70} className="mx-auto text-[orange]" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <FaBootstrap size={70} className="mx-auto text-[orange]" />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <TbBrandJavascript size={70} className="mx-auto text-[orange]" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <DiReact size={70} className="mx-auto text-[orange]" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <SiRedux size={70} className="mx-auto text-[orange]" />
            <p className="my-4">Redux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
