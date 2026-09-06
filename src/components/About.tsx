"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { siteConfig } from "@/content/meta";

export default function About() {
  return (
    <section id="about" className="bg-ed-offwhite text-ed-black py-24 lg:py-40">
      
      <div className="container-spacious">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="font-editorial-mono text-ed-accent lg:w-32 pt-2">
            02 / ABOUT
          </div>
          <h2 className="font-editorial-display text-4xl lg:text-7xl max-w-4xl">
            ARCHITECTURE OF MODERN SYSTEMS
          </h2>
        </div>

        {/* Content Spread */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Left Column: Manifesto / Core text */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-7">
            <p className="font-editorial-body text-xl lg:text-2xl text-ed-black mb-8 leading-relaxed">
              An architecture is like an archive of complex systems. Created over several years, partly in the codebase, partly in production somewhere between scalable microservices and raw performance.
            </p>
            <p className="font-editorial-body text-lg text-ed-grey-dark leading-relaxed">
              {siteConfig.description} The goal is always to build systems that are not just functional, but profoundly robust. When engineering meets meticulous design, the result is software that withstands the test of scale.
            </p>
          </motion.div>

          {/* Right Column: Stack & Details */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-5 flex flex-col gap-16">
            
            <div>
              <h3 className="font-editorial-mono mb-8 text-ed-black border-b border-ed-grey pb-4">CORE TECHNOLOGY STACK</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {siteConfig.techStack.map((tech, i) => (
                  <div key={tech} className="font-editorial-mono text-sm text-ed-grey-dark flex items-center gap-3">
                    <span className="text-ed-accent opacity-50">{String(i + 1).padStart(2, '0')}</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ed-black text-ed-offwhite p-8 lg:p-12 rounded-sm">
              <h3 className="font-editorial-mono mb-6 text-ed-grey">CURRENT FOCUS</h3>
              <p className="font-editorial-body leading-relaxed text-ed-grey/80">
                Currently exploring the intersections of distributed tracing, high-throughput message queues, and extremely tight React compiler optimizations.
              </p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
