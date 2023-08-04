import { Fragment } from "react";
import { staggeritem, staggertween } from "../AnimationObj";
import { motion } from "framer-motion";

export const Desc = ({ desc }) => {
  return (
    <>
      <h1 className="mt-5 text-[10pt] md:text-base font-normal leading-loose md:leading-8 text-slate-200 font-mons">
        {desc.first.split(" ").map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            variants={staggertween}
            initial={staggertween({ y: 20 }).initial}
            whileInView={
              staggertween({ y: 20, delayvar: wordIndex * 0.01 }).animate
            }
            className={`inline-block mr-2 font-normal ${
              word === "Web" || word === "Developer"
                ? "text-blue-300 tracking-wider font-medium"
                : ""
            }`}
            viewport={{ once: true, amount: "some" }}
          >
            {word}
          </motion.span>
        ))}
        <br />
        <br />
        {desc.second.split(" ").map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            variants={staggertween}
            initial={staggertween({ y: 20 }).initial}
            whileInView={
              staggertween({ y: 20, delayvar: wordIndex * 0.01 }).animate
            }
            className={`inline-block mr-2 font-normal`}
            viewport={{ once: true, amount: "some" }}
          >
            {word}
          </motion.span>
        ))}
      </h1>
    </>
  );
};

export const Exp = ({ dataexp }) => {
  return (
    <>
      {dataexp.map((data, index) => (
        <Fragment key={'frag' + index}>
          <div key={"container" + index} className="h-32" />
          <div
            className="min-w-[50vw] md:max-w-[50vw] md:min-w-[40vw]  px-2 py-1 text-center z-10"
            key={"data" + index}
          >
            <motion.div
              key={'motion'+index}
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5 * (index == 0 ? 0.25 : index),
                },
              }}
              viewport={{ once: true, amount: 1 }}
              className="text-base font-normal tracking-widest text-slate-300 bg-slate-800"
            >
              {data.date}
            </motion.div>
            <motion.div
              key={'motion1'+index}
              initial={{ y: "-100%", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.3 * index },
              }}
              viewport={{ once: true, amount: 1 }}
              className="text-3xl font-semibold tracking-wide text-white bg-slate-800"
            >
              {data.position}
            </motion.div>
            <div key={'motion3'+index} className="h-32" />
            <div key={'motion4'+index} className="h-2 bg-slate-800" />
            <motion.div
              className={`relative w-auto h-auto  p-2 py-4 mb-4 border-2 rounded-xl bg-slate-900/100 border-slate-500 z-10`}
              key={'motion5'+index}
            >
              <div className={`flex flex-wrap justify-center gap-4 px-4 mb-10`}>
                {data.tech.map((techItem, index) => (
                  <motion.img
                    src={techItem}
                    key={"img" + index}
                    alt={`Tech ${index}`}
                    className="w-[40px]"
                    variants={staggeritem}
                    initial={staggeritem({ x: "-100%" }).initial}
                    whileInView={staggeritem({ delayvar: index * 0.2 }).animate}
                    viewport={{ once: true, amount: 0.5 }}
                  />
                ))}
              </div>

              <p className="p-1 text-left text-white " key={data.uniqueid}>
                {data.desc.split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={"span" + wordIndex}
                    variants={staggertween}
                    initial={staggertween({ y: 20 }).initial}
                    whileInView={
                      staggertween({ y: 20, delayvar: wordIndex * 0.01 })
                        .animate
                    }
                    className="inline-block mr-2 text-[10pt] font-normal leading-loose font-mons text-slate-300 md:text-base md:leading-loose"
                    viewport={{ once: true, amount: "some" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </div>
        </Fragment>
      ))}
    </>
  );
};
