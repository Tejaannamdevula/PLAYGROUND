"use client";

import { motion } from "framer-motion";
/* 

    Transition 

        Duration :- How long the animation takes
        Delay :- How long the animation waits before starting
        Easing:- The speed curve of the animation   


*/
export function Transition() {
  return (
    <div>
      <motion.div
        className=" w-[300px] h-[300px] bg-orange-600"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
