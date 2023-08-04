import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const textVariants = {
    initial: {
      textShadow: "0px 0px 4px rgba(240, 240, 255, 0.8)",
    },
    animate: {
      textShadow: [
        "0px 0px 4px rgba(240, 240, 255, 0.8)",
        "0px 0px 30px rgba(240, 240, 255, 1)",
        "0px 0px 30px rgba(240, 240, 255, 0.8)",
        "0px 0px 30px rgba(240, 240, 255, 0.8)",
        "0px 0px 30px rgba(240, 240, 255, 0.8)",
      ],
      transition: {
        duration: 4,
        delay:1,
        repeat: Infinity,
        repeatType: "reverse",
        ease:"easeOut"
      }
    }
  };

  const reveal = {
    initial : {
      opacity: 0,
      y:20
    },
    animate : {
      opacity: 1,
      y:0,
      transition:{
        duration: 1,
        delay: 0.3
      }
    },

    initial2 : {
      opacity: 0,
      y:-20
    },
    animate2 : {
      opacity: 1,
      y:0,
      transition:{
        duration: 1.5,
        delay: 1
      }
    },
    
  }
  return (
    <>
      <div className="w-screen h-screen bg-neutral-900" id="homecomp">
        <div className="flex items-center justify-center h-full">
          <div>
          <motion.h1 className="text-white font-bold font-obitron text-[40pt] md:text-[70pt] tracking-widest text-center" variants={reveal} initial="initial"
                animate="animate">
              <motion.span
                variants={textVariants}
              >
                G
              </motion.span>
              <motion.span
                variants={textVariants}
              >
                a
              </motion.span>
              <motion.span
                variants={textVariants}
              >
                m
              </motion.span>
              <motion.span
                variants={textVariants}
              >
                a
              </motion.span>
            </motion.h1>
            <motion.h1 className="text-center text-white font-mons" variants={reveal} initial="initial2" animate="animate2">A Motivated Web Developer</motion.h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
