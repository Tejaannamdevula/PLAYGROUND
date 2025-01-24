/*



*/
"use client";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

export default function UseMotionValue() {
  const x = useMotionValue(100);

  useMotionValueEvent(x, "animationStart", () => {
    console.log(`animation started on x `);
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log(`currently at ${latest}`);
  });
  return (
    <motion.div
      className="w-[150px] h-[150px] rounded-full bg-orange-600"
      style={{ x }}
      drag
      dragConstraints={{ left: 0, right: 200 }}
    ></motion.div>
  );
}
