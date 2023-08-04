import {
    SquareObj,
    CompAnim,
    slideComp,
    staggeritem,
    staggertween,
  } from "../AnimationObj";
import { motion, useAnimation, useInView } from "framer-motion";

export const Beginnerskill = ({ beginnerSkills }) => {
  return (
    <>
      {beginnerSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex items-center justify-center mb-4 text-white"
          variants={staggeritem}
          initial={staggeritem({ x: "-20%" }).initial}
          whileInView={staggeritem({ delayvar: index * 0.2 }).animate}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={skill.icon} alt={skill.name} className="w-10 h-10 mr-2" />
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </>
  );
};

export const  Experiencedskill = ({experiencedSkills}) => {
    return (
        <>
        {experiencedSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center justify-center mb-4 text-white"
                  variants={staggeritem}
                  initial={staggeritem({ x: "-20%" }).initial}
                  whileInView={staggeritem({ delayvar: index * 0.2 }).animate}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex justify-end w-1/2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 mr-2"
                    />
                  </div>
                  <div className="w-1/2">
                    <span className="text-sm text-left md:text-base">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
        </>
    )
}
