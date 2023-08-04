import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import htmlsvg from "../assets/svg/html-5-svgrepo-com.svg";
import cssvg from "../assets/svg/css-svgrepo-com.svg";
import jsvg from "../assets/svg/javascript-svgrepo-com.svg";
import tailwindsvg from "../assets/svg/tailwind-css-svgrepo-com.svg";
import phpsvg from "../assets/svg/php-svgrepo-com.svg";
import mysqlsvg from "../assets/svg/oracle-mysql-logos-idSEhEKy8_.svg";
import laravelsvg from "../assets/svg/laravel-svgrepo-com (1).svg";
import jquerysvg from "../assets/svg/jquery-svgrepo-com.svg";
import { Exp } from "./Map/Description";

const variant = {
  initial: {
    height: "0",
  },
  animate: {
    height: "auto",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const dataexp = [
  {
    id: 1,
    date: "2023",
    position: "Fullstack Web Developer",
    tech: [
      htmlsvg,
      cssvg,
      jsvg,
      tailwindsvg,
      phpsvg,
      mysqlsvg,
      laravelsvg,
      jquerysvg,
    ],
    desc: "As a Fullstack Web Developer, I utilized HTML, CSS, JavaScript, jQuery, Laravel, MySQL, and Tailwind CSS to develop a web-based ERP application. My responsibilities included developing both the frontend and backend components of the ERP application, incorporating user interface design, and database management.",
  },
  {
    id: 2,
    date: "2022",
    position: "Web Developer Intern",
    tech: [htmlsvg, cssvg, phpsvg, mysqlsvg, laravelsvg, tailwindsvg],
    desc: "During my tenure as a Web Developer Intern, my primary focus was on developing a web-based human resource management system. I was involved in implementing user interfaces, enhancing functionalities, and troubleshooting issues within the application.",
  },
  {
    id: 3,
    date: "2020",
    position: "Backend Developer Intern",
    tech: [phpsvg, mysqlsvg],
    desc: "As a Backend Developer Intern, my role involved working with PHP and MySQL to develop the backend infrastructure of a web-based inventory system. I contributed to database modeling to support the systems functionality.",
  },
];

const Experience = () => {
  const contref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: contref,
    offset: ["start end", "end start"]
  })
  return (
    <div className="relative flex flex-col w-screen h-full bg-slate-800" id="experiencecomp">
      <div className="text-[25pt] md:text-[60pt] font-bold text-center text-slate-100 font-obitron tracking-wide w-auto mb-20">
        <hr className=" w-[90%] mx-auto my-4 border-t-2 border-slate-100" />
        <div className="relative w-auto h-auto overflow-hidden">
          {/* <SquareObj /> */}
          <motion.h1
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: "all" }}
          >
            Experiences
          </motion.h1>
        </div>
        <hr className="w-[90%] mx-auto my-4 border-t-2 border-slate-100" />
      </div>

      <div className="flex flex-col items-center w-screen h-full">
        <h1 className="mb-1 tracking-[0.2rem] text-white text-normal">
          Present
        </h1>

        <div className="relative flex flex-col items-center mb-[150px]" ref={contref}>
          <motion.div className="absolute top-0 z-0 w-1 h-full origin-top bg-white rounded-full" style={{ scaleY: scrollYProgress }} />
          <Exp dataexp = {dataexp} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
