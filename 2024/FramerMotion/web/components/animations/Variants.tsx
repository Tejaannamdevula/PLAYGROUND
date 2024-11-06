/* 


    predefined animate states

*/
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
function Variants() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <motion.div
        className="w-[300px] h-[300px] bg-orange-600"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        exit={"exit"}
        transition={{ duration: 5 }}
        onClick={() => setVisible((prev) => !prev)}
      ></motion.div>
    </div>
  );
}

export default Variants;
