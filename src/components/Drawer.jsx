import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Drawer = () => {
  const containervar = {
    initial: {
      width: 0,
      height: 10,
    },
    animate: {
      width: "50vw",
      height: "auto",
      transition: {
        width: {
          duration: 0.5,
        },
        height: {
          duration: 0.3,
          delay: 0.5,
        },
        staggerChildren: 0.5,
      },
    },
    exit: {
      width: 0,
      height: 10,
    },
  };

  const ulvar = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  const listvar = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div className="fixed z-20 flex justify-end w-full top-14">
        <motion.div
          className="w-full rounded-tl-lg rounded-bl-lg bg-slate-800/90"
          variants={containervar}
          initial="initial"
          animate="animate"
        >
          <motion.ul
            variants={ulvar}
            className="flex flex-col justify-center h-screen gap-20 p-4 font-medium tracking-widest text-slate-200 font-obitron"
          >
            <motion.li
              className="text-base text-center cursor-pointer md:text-xl"
              variants={listvar}
            >
              <Link
                to="homecomp"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80} // Atur sesuai kebutuhan
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              className="text-base text-center cursor-pointer md:text-xl"
              variants={listvar}
            >
              <Link
                to="aboutcomp"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50} // Atur sesuai kebutuhan
              >
                About
              </Link>
            </motion.li>
            <motion.li
              className="text-base text-center cursor-pointer md:text-xl"
              variants={listvar}
            >
              <Link
                to="experiencecomp"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50} // Atur sesuai kebutuhan
              >
                Experience
              </Link>
            </motion.li>
            <motion.li
              className="text-base text-center cursor-pointer md:text-xl"
              variants={listvar}
            >
              <Link
                to="projectcomp"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50} // Atur sesuai kebutuhan
              >
                Projects
              </Link>
            </motion.li>
            <motion.li
              className="text-base text-center cursor-pointer md:text-xl"
              variants={listvar}
            >
              <Link
                to="contactcomp"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={50} // Atur sesuai kebutuhan
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
};

export default Drawer;
