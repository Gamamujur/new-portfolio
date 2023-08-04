import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img1 from "../assets/20210629_075935c.jpg";
import htmlsvg from "../assets/svg/html-5-svgrepo-com.svg";
import cssvg from "../assets/svg/css-svgrepo-com.svg";
import jsvg from "../assets/svg/javascript-svgrepo-com.svg";
import tailwindsvg from "../assets/svg/tailwind-css-svgrepo-com.svg";
import phpsvg from "../assets/svg/php-svgrepo-com.svg";
import mysqlsvg from "../assets/svg/oracle-mysql-logos-idSEhEKy8_.svg";
import reactsvg from "../assets/svg/react-javascript-js-framework-facebook-svgrepo-com (1).svg";
import nextsvg from "../assets/svg/next-js-svgrepo-com.svg";
import laravelsvg from "../assets/svg/laravel-svgrepo-com (1).svg";
import jquerysvg from "../assets/svg/jquery-svgrepo-com.svg";
import {
  SquareObj,
  CompAnim,
  slideComp,
} from "./AnimationObj";
import { Desc } from "./Map/Description";
import { Beginnerskill, Experiencedskill } from "./Map/Skills";

const About = () => {
  const beginnerSkills = [
    { icon: reactsvg, name: "React JS" },
    { icon: nextsvg, name: "Next JS" },
  ];

  const desc = {
    first: `I'm a Web Developer who enjoys learning about web development. I graduated with a Bachelor's Degree in Information System in 2022 and have since been involved in web application.`,
    second: `My journey in web development began with PHP and MySQL, where I completed my initial project. Since then, I have continuously expanded my skill set. Currently, I primarily work with Laravel, MySQL, and JQuery, while also exploring full-stack web development with React JS and Next JS. I'm always eager to apply my knowledge and expertise to real-world projects.`,
  };

  const experiencedSkills = [
    { icon: htmlsvg, name: "HTML" },
    { icon: cssvg, name: "CSS" },
    { icon: jsvg, name: "JavaScript" },
    { icon: tailwindsvg, name: "Tailwind CSS" },
    { icon: phpsvg, name: "PHP" },
    { icon: mysqlsvg, name: "MySQL" },
    { icon: laravelsvg, name: "Laravel" },
    { icon: jquerysvg, name: "JQuery" },
  ];

  const ref = useRef(null);
  const refskills = useRef(null);
  const isView = useInView(ref, { once: true });
  const isView2 = useInView(refskills, { once: true });
  const startanimation = useAnimation();
  const startanimationtext = useAnimation();
  const startanimateskills = useAnimation();
  const startanimateskills2 = useAnimation();

  useEffect(() => {
    if (isView) {
      startanimation.start(CompAnim(0, 0.3).animate);
      startanimationtext.start(CompAnim(0, 1.5).animate);
    }
  }, [isView]);

  useEffect(() => {
    console.log("sampe", isView2);
    if (isView2) {
      startanimateskills.start(slideComp({ x2: 0 }).animate);
      startanimateskills2.start(slideComp({ x2: 0, delay: 1 }).animate);
    }
  }, [isView2]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-full pb-20 bg-slate-700" id="aboutcomp">
      <div className="text-[30pt] md:text-[60pt] font-bold text-center text-slate-100 font-obitron mt-[40px] tracking-wide w-auto">
        <hr className="mx-auto my-4 border-t-2 border-slate-100" />
        <div ref={ref} className="relative w-auto h-auto overflow-hidden">
          <SquareObj />
          <motion.h1 initial={CompAnim(100).initial} animate={startanimation}>
            About Me
          </motion.h1>
        </div>
        <hr className="mx-auto my-4 border-t-2 border-slate-100" />
      </div>

      <div className="flex flex-col w-screen h-full pt-6 md:flex-row md:pt-12 mb-[150px]">
        <div className="max-w-lg md:max-w-[50%] p-5 mx-auto relative">
          <div className="max-w-[70%] lg:max-w-[50%] mx-auto relative overflow-hidden">
            <motion.img
              src={img1}
              alt=""
              className="transition duration-500 shadow-lg grayscale hover:grayscale-0 hover:shadow-slate-100/50"
              initial={CompAnim("40vh", 0).initial}
              animate={startanimation}
            />
            <SquareObj delay={0.5} />
          </div>
        </div>
        <div className="p-5 md:w-1/2">
          <h1 className="w-full h-auto text-3xl font-bold tracking-wide text-white font-mons md:flex">
            <p className="relative flex-shrink-0 w-auto h-auto overflow-hidden">
              <motion.span
                initial={CompAnim("10vh", 100, 0).initial}
                animate={startanimationtext}
              >
                Hi, I'm Gama
              </motion.span>

              <SquareObj x2={0} y2={100} />
            </p>
            <div className="items-center flex-shrink hidden w-3/4 ml-2 md:flex">
              <hr className="w-full mx-auto text-white border-2" />
            </div>
          </h1>

          <Desc key={Math.random().toFixed(2)} desc={desc} />
        </div>
      </div>

      <div className="w-screen h-full mt-[100px] mb-[150px]">
        <h1 className="text-3xl font-bold tracking-wide text-center text-white font-obitron mb-[50px] flex justify-center">
          <div className="items-center flex-shrink w-[20%] mr-2 flex">
            <hr className="w-full mx-auto text-white border-2" />
          </div>
          <p className="relative w-auto h-auto overflow-hidden">
            <motion.span
              initial={CompAnim("10vh", 100, 0).initial}
              animate={startanimationtext}
            >
              My Skills
            </motion.span>
            <SquareObj x2={0} y2={100} />
          </p>

          <div className="items-center flex-shrink w-[20%] ml-2 flex">
            <hr className="w-full mx-auto text-white border-2" />
          </div>
        </h1>

        <div className="flex flex-col w-screen h-full gap-[50px] md:flex-row p-2">
          <motion.div className="flex flex-col justify-center w-full h-full p-2 border-2 shadow-inner bg-neutral-700/50 rounded-xl shadow-white/80">
            <h1 className="mb-10 text-2xl font-bold tracking-wide text-center text-white font-mons">
              Beginner
            </h1>
            <div>
              <Beginnerskill beginnerSkills={beginnerSkills} />
            </div>
          </motion.div>

          <div className="flex flex-col justify-center w-full h-full p-2 border-2 shadow-inner bg-neutral-700/50 rounded-xl shadow-white/80">
            <h1 className="mb-10 text-2xl font-bold tracking-wide text-center text-white font-mons">
              Experienced
            </h1>
            <div className="grid grid-cols-2 gap-3 md:grid-rows-2">
              <Experiencedskill experiencedSkills={experiencedSkills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
