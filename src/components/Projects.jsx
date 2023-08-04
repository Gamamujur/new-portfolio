import React from "react";
import { motion } from "framer-motion";
import { SquareObj, CompAnim, rotateanim } from "./AnimationObj";
import netfliximg from "../assets/netflix.png";
import tescomimg from "../assets/tescommerce.png";

const Projects = () => {
  const projectitem = [
    {
      id: 1,
      title: "Netflix Clone",
      img: netfliximg,
      desc: "A simple Netflix clone website, made with React JS, Tailwind CSS, and The Movie Database API. Users are allowed to sign up, view movie details, add liked movie and watch movie trailers. The website utilizes the API from The Movie Database to fetch movie data and display it in a user-friendly interface.",
      link:"https://gamamujur.github.io/react-netflixclone/"
    },
    {
      id: 2,
      title: "Tescommerce",
      img: tescomimg,
      desc: "A simple e-commerce website, made with Next JS, Tailwind CSS, and Fakestore API. Tescommerce allows users to browse products from various categories. It features a shopping cart system, cart views and total items in the cart. The website utilizes the Fakestore API to fetch product data and display it to users.",
      link:"https://tescommerce.vercel.app/"
    },
  ];
  return (
    <div className="flex flex-col items-center w-screen h-full pb-20 bg-slate-700" id="projectcomp">
      {/* Title */}
      <section id="project-title">
        <div className="text-[30pt] md:text-[60pt] font-bold text-center text-slate-100 font-obitron mt-[40px] tracking-wide w-auto">
          <hr className="mx-auto my-4 border-t-2 border-slate-100" />
          <div className="relative w-auto h-auto overflow-hidden">
            <SquareObj />
            <motion.h1
              initial={CompAnim(50).initial}
              whileInView={CompAnim(1, 0.51, 1).animate}
              viewport={{ once: true, amount: 0.1 }}
            >
              Projects
            </motion.h1>
          </div>
          <hr className="mx-auto my-4 border-t-2 border-slate-100" />
        </div>
      </section>

      <section id="project-items" className="mt-[100px]">
        {/* Project Items */}
        <div className="flex flex-col flex-wrap items-center justify-center w-screen h-full gap-20 p-2 md:flex-row">
          {projectitem.map((item,index) => (
            <motion.div
              key={item.id}
              variants={rotateanim}
              initial={rotateanim({x:90}).initial}
              whileInView={rotateanim({x1:0, delayvar: (index * 0.8)}).animate}
              viewport={{ once:true, amount:1 }}
              className=" p-2 border-1 border-white/10 rounded-xl shadow-inner shadow-white h-full lg:w-[30%] bg-slate-800 font-mons w-full sm:w-[60%] origin-top"
            >
              <h1 className="mt-4 mb-4 text-3xl font-bold tracking-wider text-center text-neutral-300 font-obitron">{item.title}</h1>
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full mb-4 h-42"
              />
              <p className="p-2 mb-4 text-[10pt] md:text-sm font-medium leading-loose md:leading-loose text-slate-300">{item.desc}</p>

              <div className="w-full mb-4 text-center">
                <a href={item.link}><button className="px-4 py-2 font-medium text-white transition duration-300 rounded-full shadow-md bg-violet-700 shadow-slate-400 hover:scale-110 hover:bg-violet-800">Project Demo</button></a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
