import React, { useState } from "react";
import { ImMenu, ImCross, ImLinkedin, ImGithub, ImMail2 } from "react-icons/im";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="z-10">
        <img
          className="cursor-pointer "
          src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=450x338&vertical=top"
          alt="logoimage"
          style={{ width: "50px" }}
        />
      </div>

      <ul className="md:flex hidden">
        <li className="cursor-pointer">
          <Link to="home" smooth={true} duration={100}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about" smooth={true} duration={100}>
            About
          </Link>
        </li>

        <li className="cursor-pointer">
          <Link to="skills" smooth={true} duration={100}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="work" smooth={true} duration={100}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={100}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* HAMBURGER MENU */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <ImMenu /> : <ImCross />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="cursor-pointer py-6 text-4xl">
          {" "}
          <Link to="home" smooth={true} duration={100}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-4xl">
          {" "}
          <Link to="about" smooth={true} duration={100}>
            About
          </Link>
        </li>

        <li className="cursor-pointer py-6 text-4xl">
          <Link to="skills" smooth={true} duration={100}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-4xl">
          <Link to="work" smooth={true} duration={100}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer py-6 text-4xl">
          {" "}
          <Link to="contact" smooth={true} duration={100}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-[0]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a
              href="/"
              className="flex justify-between items-center w-full  text-gray-300 ml-[-90px] hover:ml-[-20px] hover:bg-[#fff] duration-300 bg-blue-600 p-3"
            >
              Linkedin <ImLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a
              href="/"
              className="flex justify-between items-center w-full  text-gray-300 ml-[-90px] hover:ml-[-20px] duration-300 bg-[#333] p-3 hover:bg-[#fff]"
            >
              Github <ImGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center">
            <a
              href="/"
              className="flex justify-between items-center w-full  text-gray-300 ml-[-90px] hover:ml-[-20px] duration-300 bg-[#6fc2b0] p-3 hover:bg-[#fff]"
            >
              Mail <ImMail2 size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
