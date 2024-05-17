import Myproject from "@/components/myproject";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-full -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-emerald-500"></div>
      <div className=" flex justify-center items-center text-center">
        <h1 className="inline-flex flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[8rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300">
          <span>ذخر العطاس</span>
        </h1>
      </div>

      <div className=" mt-20">
        <Myproject />
      </div>
    </div>
  );
}
