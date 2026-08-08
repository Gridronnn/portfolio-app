"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { siteConfig } from "@/content/meta";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves text left-to-right as you scroll down
  const xMovement = useTransform(scrollYProgress, [0, 1], ["-5vw", "15vw"]);
  const xMovementSlow = useTransform(scrollYProgress, [0, 1], ["-2vw", "10vw"]);
  const xMovementFast = useTransform(scrollYProgress, [0, 1], ["-8vw", "20vw"]);

  return (
    <section id="about" ref={containerRef} className="bg-white text-black pt-20 overflow-hidden">
      
      {/* Top Numbering (03, 04, 05) */}
      <div className="flex w-full border-t border-black body-pk text-xs font-bold pt-1 relative z-20 bg-white">
        <div className="w-1/4" />
        <div className="w-1/4 text-center">03</div>
        <div className="w-1/4 text-center">04</div>
        <div className="w-1/4 text-center">05</div>
      </div>

      <motion.div
        className="pulse-grid w-full relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Row 1 */}
        <motion.div variants={fadeInUp} className="col-span-1 justify-start! overflow-visible relative">
          <motion.span style={{ x: xMovementFast }} className="pulse-text whitespace-nowrap absolute left-4">Archi</motion.span>
        </motion.div>
        <motion.div variants={fadeInUp} className="col-span-1 relative">
          <div className="pulse-dot absolute right-[-2rem] z-10" />
        </motion.div>
        <motion.div variants={fadeInUp} className="col-span-2 justify-start! pl-12! overflow-visible relative">
          <motion.span style={{ x: xMovementSlow }} className="pulse-text whitespace-nowrap absolute left-12">tecture</motion.span>
        </motion.div>

        {/* Row 2 */}
        <motion.div variants={fadeInUp} className="col-span-1 relative">
          <div className="pulse-dot absolute right-[-2rem] z-10" />
        </motion.div>
        <motion.div variants={fadeInUp} className="col-span-1 justify-center! overflow-visible relative">
          <motion.span style={{ x: xMovement }} className="pulse-text whitespace-nowrap absolute">of</motion.span>
        </motion.div>
        <motion.div variants={fadeInUp} className="col-span-1 relative">
          <div className="pulse-dot absolute right-[-2rem] z-10" />
        </motion.div>
        <motion.div variants={fadeInUp} className="col-span-1 justify-start! pl-12! overflow-visible relative">
          <motion.span style={{ x: xMovementFast }} className="pulse-text whitespace-nowrap absolute left-12">Modern</motion.span>
        </motion.div>

        {/* Row 3 */}
        <motion.div variants={fadeInUp} className="col-span-2" />
        <motion.div variants={fadeInUp} className="col-span-2 justify-start! relative overflow-visible">
          <div className="pulse-dot absolute left-[-2rem] z-10" />
          <motion.span style={{ x: xMovementSlow }} className="pulse-text whitespace-nowrap absolute left-12">Systems</motion.span>
        </motion.div>
      </motion.div>

      {/* Marquee Row */}
      <div className="border-t border-b border-black py-8 mt-12 w-full overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content flex gap-32 items-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-32 items-center">
                {siteConfig.techStack.map((tech) => (
                  <span key={tech} className="heading-pk text-3xl opacity-80">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
