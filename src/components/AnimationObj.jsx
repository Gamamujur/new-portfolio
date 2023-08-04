import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const SquareObj = ({ delay, x1, x2, y1, y2 }) => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });
  const startanimation = useAnimation();

  useEffect(() => {
    if (isView) {
      startanimation.start(squarevariant.animate);
    } else {
      startanimation.start(squarevariant.initial);
    }
  }, [isView]);

  const squarevariant = {
    initial: {
      x: x1 ?? 0,
      y: y1 ?? 0,
    },
    animate: {
      x: x2 ?? "100vw",
      y: y2 ?? 0,
      transition: {
        duration: 0.7,
        delay: delay ?? 0.5,
        ease: "easeIn",
      },
    },
  };
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white"
        variants={squarevariant}
        animate={startanimation}
        ref={ref}
      />
    </>
  );
};

export const CompAnim = (y, delay, opacity) => {
  return {
    initial: {
      opacity: opacity ?? 0.2,
      y: y ?? 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay ?? 0,
        ease: "easeInOut",
      },
    },
  };
};

export const slideComp = ({ x1,x2, y1,y2, delay }) => {
  return {
    initial: { 
      x: x1 ?? 0 ,
      y: y1 ?? 0,
    },
    animate : {
      x: x2 ?? 0,
      y: y2 ?? 0,
      transition:{
        type: 'tween',
        duration: 1,
        delay: delay ?? 0
      }
    }
  };
};

export const staggeritem = ({x,x1,y,y1, delayvar}) =>{
  return {
    initial:{
      x: x ?? 0,
      y: y ?? 0,
      opacity: 0
    },
    animate:{
      x: x1 ?? 0,
      y: y1 ?? 0,
      opacity: 1,
      transition:{
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
        delay: delayvar ?? 0
      }
    }
  }
}

export const staggertween = ({x,x1,y,y1, delayvar}) =>{
  return {
    initial:{
      x: x ?? 0,
      y: y ?? 0,
      opacity: 0
    },
    animate:{
      x: x1 ?? 0,
      y: y1 ?? 0,
      opacity: 1,
      transition:{
        duration: 0.5,
        delay: delayvar ?? 0
      }
    }
  }
}

export const containeranim = ({ w, w1, h, h1 }) => {
  return {
    initial: {
      height: h ?? 0,
    },
    animate: {
      height: h1 ?? 0,
      transition: {
        duration: 1,
        type: 'spring',
        damping: 10, // Nilai damping yang lebih rendah menghasilkan efek yang lebih halus
        stiffness: 100, // Nilai stiffness yang lebih tinggi menghasilkan efek yang lebih halus
      },
    },
  };
};

export const rotateanim = ({x,x1,y,y1,delayvar}) =>{
  return{
    initial: {
      rotateX: x ?? 0,
      rotatey: y ?? 0,
      
    },
    animate:{
      rotateX: x1 ?? 0,
      rotateY: y1 ?? 0,
      
      transition : {
        type:'spring',
        duration: 1.5,
        damping: 5, // Adjust the damping for bounce effect (higher values dampen the bounce)
        stiffness: 30, // Adjust the stiffness for bounce effect (higher values make it stiffer)
        delay : 0.5 + (delayvar ?? 0)
      }
    }
  }
}

