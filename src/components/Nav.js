import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase } from "react-icons/bs";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full z-50">
      <div className="container mx-auto">
        {/*nav inner*/}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[550px] mx-auto px-6 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeclass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative group hover:text-white transition-colors"
          >
            <BiHomeAlt />
            <span className="absolute -top-12 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md pointer-events-none">Home</span>
          </Link>
          <Link
            to="about"
            activeclass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative group hover:text-white transition-colors"
          >
            <BiUser />
            <span className="absolute -top-12 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md pointer-events-none">About</span>
          </Link>
          <Link
            to="skills"
            activeclass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative group hover:text-white transition-colors"
          >
            <BsBriefcase />
            <span className="absolute -top-12 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md pointer-events-none">Skills</span>
          </Link>
          <Link
            to="education"
            activeclass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative group hover:text-white transition-colors"
          >
            <FaGraduationCap />
            <span className="absolute -top-12 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md pointer-events-none">Education</span>
          </Link>

          <Link
            to="projects"
            activeclass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative group hover:text-white transition-colors"
          >
            <BsClipboardData />
            <span className="absolute -top-12 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md pointer-events-none">Projects</span>
          </Link>

          <Link
            to="certifications"
            activeclass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative group hover:text-white transition-colors"
          >
            <FaAward />
            <span className="absolute -top-12 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md pointer-events-none">Certifications</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
