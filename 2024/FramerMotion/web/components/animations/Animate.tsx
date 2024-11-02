"use client";
import { motion, type MotionProps } from "framer-motion";

type AnimateProps = {
  children: React.ReactNode;
  animateProps?: MotionProps["animate"];
};

/*
  




*/
export function Animate({ children, animateProps }: AnimateProps): JSX.Element {
  return (
    <div>
      <motion.div animate={animateProps}>{children}</motion.div>
    </div>
  );
}
