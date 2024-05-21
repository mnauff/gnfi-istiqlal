"use client";
import type { BlockType } from "@/data/types";
import { merge } from "@/lib/merge";
import { useNavigation } from "@/store/useNavigation";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import { BarChart2Icon } from "lucide-react";
import { useState } from "react";
export type NavbarType = {
  blurEffect?: boolean;
};
export function Navbar() {
  const [_, setNavigation] = useNavigation();
  const toggleNavHandler = () => {
    setNavigation((prev) => ({ ...prev, show: !prev.show }));
  };
  const { scrollY } = useScroll();
  const [shouldBlur, setShouldBlur] = useState(false);
  //   const config = block.componentProps as NavbarType;
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      !shouldBlur && setShouldBlur(true);
    } else {
      shouldBlur && setShouldBlur(false);
    }
  });
  return (
    <motion.div
      layout
      data-blur={shouldBlur}
      className={merge(
        " data-[blur=true]:shadow sticky data-[blur=true]:h-[60px] lg:data-[blur=true]:h-[90px] h-[150px] top-0 bg-transparent z-50 px-6 lg:px-8 flex flex-col items-center justify-center"
      )}
    >
      <div className="max-w-7xl mx-auto justify-between items-center flex w-full">
        <motion.button
          layout
          data-blur={shouldBlur}
          type="button"
          onClick={toggleNavHandler}
          className="text-xl font-bold border group transition-colors border-white data-[blur=true]:border-black rounded-full p-0.5 lg:p-2 data-[blur=true]:hover:bg-black hover:bg-white"
        >
          <BarChart2Icon className="rotate-90 group-data-[blur=true]:text-black text-white ml-3 my-0.5 lg:my-0 lg:ml-6 group-hover:text-black group-data-[blur=true]:group-hover:text-white transition-colors size-[20px] lg:size-[30px]" />
        </motion.button>
        <motion.img
          layout
          data-blur={shouldBlur}
          src="/images/logo.png"
          alt="Logo GNFI"
          className="w-[40px] md:w-[60px] data-[blur=true]:invert data-[blur=true]:w-[30px] lg:data-[blur=true]:w-[50px]"
        />
      </div>
    </motion.div>
  );
}
