/*
    Gestures add interativity to animations

    like dragging , hovering or tapping 

*/
"use client";
import { motion, spring } from "framer-motion";

const Gestures = () => {
  return (
    <div>
      <motion.div
        className="w-[300px] h-[300px] bg-orange-600"
        // whileHover={{ scale: 1.5, rotate: 10 }}
        transition={{ type: spring, stiffness: 300 }}
        // whileTap={{ scale: 0.8, backgroundColor: "royalblue" }}
        whileDrag={{ scale: 0.8 }}
        drag
        dragConstraints={{
          top: 50,
          left: -50,
          right: 50,
          bottom: -50,
        }}
      ></motion.div>
    </div>
  );
};

export default Gestures;
