"use client";
import { motion } from "framer-motion";

/* 

    Keyframes 

    splitting or dividing animation into mutiple parts
    
        [start,end]

*/
export function KeyFrame() {
  return (
    <div>
      <motion.div
        className="w-[300px] h-[300px] bg-orange-600"
        animate={{
          // scale: [1, 2, 4, 5, 2, 1, 2, 3],
          rotate: [10, 20, 30, 40, 50],
        }}
        transition={{ duration: 5 }}
      ></motion.div>
    </div>
  );
}
