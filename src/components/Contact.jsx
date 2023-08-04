import React from "react";
import { motion } from "framer-motion";
import gitsvg from "../assets/svg/github-142-svgrepo-com.svg";
import linkedsvg from "../assets/svg/linkedin-color-svgrepo-com.svg";

const firstvar = {
  initial: {
    height: 0,
  },
  animate: {
    height: "96px",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const linkVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.8,
    },
  },
};

const avar = {
  hover: {
    scale: 1.3,
  },
};

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-neutral-800" id="contactcomp">
        <h1 className="mb-4 text-3xl font-semibold tracking-widest text-white font-obitron">
          Contact
        </h1>
        <motion.div
          variants={firstvar}
          initial="initial"
          whileInView="animate"
          className="flex items-center justify-center w-full h-24 bg-slate-200"
          viewport={{ once: true, amount: "all" }}
        >
          <motion.div
            variants={linkVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "all" }}
            className="flex justify-center w-1/2 gap-8 h-1/2"
          >
            <motion.a
              variants={avar}
              whileHover="hover"
              href="https://github.com/Gamamujur"
              className="w-[50px] h-[50px] hover:scale-125 transition duration-500"
            >
              <img src={gitsvg} alt="" />
            </motion.a>
            <motion.a
              variants={avar}
              whileHover="hover"
              href="https://www.linkedin.com/in/gama-mujur-024960228/"
              className="w-[50px] h-[50px] hover:scale-125 transition duration-500"
            >
              <img src={linkedsvg} alt="" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <footer className="py-4 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center text-center">
            <div className="w-full mb-4 md:w-auto md:mb-0">
              <h2 className="text-xl font-bold">
                Personal Portfolio <small className="text-xs">by Gama</small>
              </h2>
              <p className="text-sm text-slate-400">
                Made with React JS, Framer Motion.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
