/* 

    Stagger Animation  technique where multiple animations animate in a sequence 


*/
"use client";
import { motion } from "framer-motion";

const parentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const StaggerAnimation = () => {
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      {[...Array(5)].map((_, item) => (
        <motion.div
          key={item}
          className="w-[150px] h-[150px] rounded-full bg-orange-600 mt-[2rem]"
          variants={childVariant}
        ></motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerAnimation;
