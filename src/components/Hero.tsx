"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white text-black flex flex-col justify-center overflow-hidden">
      
      {/* Center Typography Lockup */}
      <motion.div
        className="w-full flex items-center justify-center px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 
          className="heading-pk text-[12vw] tracking-tighter flex items-center whitespace-nowrap"
          variants={fadeInUp}
        >
          <span>Abishek</span>
          <span className="mx-[1vw] relative w-[1.2em] h-[0.7em] flex-shrink-0 grayscale">
            <Image 
              src="/images/media/abishek_portrait.jpg" 
              alt="Abishek portrait" 
              fill 
              className="object-cover" 
            />
          </span>
          <span>P S</span>
        </motion.h1>
      </motion.div>

      {/* Bottom Pinned Info Strip */}
      <motion.div 
        className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end body-pk text-sm"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex items-end gap-2">
          {/* Equalizer Icon Fake */}
          <div className="flex items-end gap-[2px] h-4 mb-1">
            <div className="w-1 bg-black h-full animate-[pulse_1s_ease-in-out_infinite]" />
            <div className="w-1 bg-black h-2 animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
            <div className="w-1 bg-black h-3 animate-[pulse_0.8s_ease-in-out_infinite_0.4s]" />
            <div className="w-1 bg-black h-1 animate-[pulse_1.5s_ease-in-out_infinite]" />
          </div>
          <div className="flex flex-col">
            <span className="text-black/40 text-xs">Now building</span>
            <span className="font-bold tracking-tight">Systems At Scale</span>
          </div>
        </div>

        <div className="max-w-xs text-center hidden md:block leading-tight font-medium">
          Explore his software, open-source releases, system architectures and a body of work shaped by years of engineering.
        </div>

        <div className="font-bold tracking-tight cursor-pointer hover:opacity-50">
          Sound OFF
        </div>
      </motion.div>
    </section>
  );
}
