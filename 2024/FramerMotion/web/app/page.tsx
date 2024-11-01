import { Animate } from "@/components/animations/Animate";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen  bg-[#0d1017] text-white">
      <Animate animateProps={{ x: 120, rotate: 120 }}>
        <div className="w-[300px] h-[300px] bg-orange-600"></div>
      </Animate>
    </div>
  );
}
