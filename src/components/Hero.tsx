"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ed-offwhite text-ed-black pt-32 pb-20 flex flex-col justify-center">
      <motion.div 
        className="container-spacious grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        {/* LEFT COLUMN: Massive Typography */}
        <div className="col-span-1 lg:col-span-8 flex flex-col justify-center">
          <motion.div variants={fadeInUp} className="font-editorial-mono mb-6 text-ed-grey-dark flex items-center gap-4">
            <span className="w-8 h-[1px] bg-ed-grey-dark"></span>
            SOFTWARE ENGINEER PORTFOLIO &copy; 2026
          </motion.div>
          <motion.h1 
            variants={fadeInUp} 
            // clamp size so it looks great on mobile without overflowing
            className="font-editorial-display text-[clamp(4rem,10vw,11rem)] flex flex-col leading-[0.9]"
          >
            <span>ENGINEER</span>
            <span>BUILDER</span>
            <span className="text-ed-accent">CREATOR</span>
          </motion.h1>
        </div>

        {/* RIGHT COLUMN: Image & Intro */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-10">
          
          {/* Portrait Image */}
          <motion.div 
            variants={fadeInUp}
            className="relative w-full aspect-[4/5] bg-ed-grey overflow-hidden rounded-sm"
          >
            <Image 
              src="/images/media/abishek_portrait.jpg" 
              alt="Abishek portrait" 
              fill 
              className="img-editorial grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <div className="font-editorial-mono text-ed-accent">01 / INTRO</div>
            <p className="font-editorial-body text-lg text-ed-grey-dark max-w-md">
              Abishek P S is a software engineer building distributed systems, developer tools, and complex architectures. Based in Hyderabad, India.
            </p>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}
