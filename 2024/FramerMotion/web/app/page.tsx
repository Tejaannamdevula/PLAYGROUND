import { Animate } from "@/components/animations/Animate";
import Gestures from "@/components/animations/Gestures";
import { KeyFrame } from "@/components/animations/KeyFrame";
import StaggerAnimation from "@/components/animations/StaggerAnimation";
import { Transition } from "@/components/animations/Transition";
import UseMotionValue from "@/components/animations/UseMotionValue";
import Variants from "@/components/animations/Variants";

/*

x: 120, rotate: 120, skewY: 20, scale: 1

x -> position on x-axis
rotate -> rotate the element
skewY -> skew the element on y-axis (tilts)
scale -> scale the element( multiply the size of the element)


*/
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen  bg-[#0d1017] text-white">
      {/* <Animate animateProps={{ x: 120, rotate: 120, skewY: 20, scale: 1 }}>
        <div className="w-[300px] h-[300px] bg-orange-600"></div>
      </Animate> */}

      {/* <Transition /> */}

      {/* <KeyFrame /> */}

      {/* <Variants /> */}
      {/* <Gestures></Gestures> */}

      {/* <StaggerAnimation /> */}
      <UseMotionValue />
    </div>
  );
}
