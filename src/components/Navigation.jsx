import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navigation = ({ setmodal }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);

  const navclasses =
    scrollPosition > 100
      ? "bg-neutral-800/70 backdrop-blur-md transition duration-500"
      : "transition duration-500";

  const [isOpen, setIsOpen] = useState(false);
  const navclick = () => {
    setIsOpen(!isOpen);
    setmodal();
  };
  const genericHamburgerLine = `h-[4px] w-[27px] my-[2px] rounded-full bg-slate-200 transition ease transform duration-300`;
  return (
    <>
      <div
        className={`fixed top-0 z-50 w-screen h-14 md:hidden ${navclasses}`}
      >
        <div className="flex items-center justify-end w-full h-full pr-2">
          <button
            className="flex flex-col items-center justify-center w-12 h-12 rounded group"
            onClick={navclick}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-1 opacity-100 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Navbar for desktop */}
      <nav
        className={`fixed top-0 z-20 hidden w-screen bg-transparent h-14 md:flex md:justify-between md:items-center md:px-16 ${navclasses}`}
      >
        <div className="flex items-center md:justify-start">
          
        </div>
        <div className={`md:flex`}>
          <Link
            to="homecomp"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80} // Atur sesuai kebutuhan
            className="p-2 mr-5 transition duration-300 rounded-full cursor-pointer text-slate-300 hover:text-neutral-800 hover:bg-white"
          >
            Home
          </Link>

          <Link
            to="aboutcomp"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={40} // Atur sesuai kebutuhan
            className="p-2 mr-5 transition duration-300 rounded-full cursor-pointer text-slate-300 hover:text-neutral-800 hover:bg-white"
          >
            About
          </Link>

          <Link
            to="experiencecomp"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={40} // Atur sesuai kebutuhan
            className="p-2 mr-5 transition duration-300 rounded-full cursor-pointer text-slate-300 hover:text-neutral-800 hover:bg-white"
          >
            Experience
          </Link>

          <Link
            to="projectcomp"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={40} // Atur sesuai kebutuhan
            className="p-2 mr-5 transition duration-300 rounded-full cursor-pointer text-slate-300 hover:text-neutral-800 hover:bg-white"
          >
            Projects
          </Link>

          <Link
            to="contactcomp"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={40} // Atur sesuai kebutuhan
            className="p-2 mr-5 transition duration-300 rounded-full cursor-pointer text-slate-300 hover:text-neutral-800 hover:bg-white"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
