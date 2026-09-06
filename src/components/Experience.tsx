"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { experiences } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-ed-offwhite text-ed-black py-24 lg:py-40">
      <div className="container-spacious">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="font-editorial-mono text-ed-accent lg:w-32 pt-2">
            04 / CAREER
          </div>
          <h2 className="font-editorial-display text-4xl lg:text-7xl">
            PROFESSIONAL HISTORY
          </h2>
        </div>

        {/* Experience Feed */}
        <motion.div
          className="w-full flex flex-col border-t border-ed-grey"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 border-b border-ed-grey hover:bg-ed-grey/10 transition-colors group cursor-pointer"
            >
              {/* Year Column */}
              <div className="col-span-1 lg:col-span-3 flex items-start lg:items-center">
                <span className="font-editorial-display text-4xl lg:text-5xl text-ed-grey-dark group-hover:text-ed-accent transition-colors">
                  {exp.startDate}
                  <span className="text-xl lg:text-2xl ml-2 text-ed-grey">— {exp.endDate === "Present" ? "NOW" : exp.endDate}</span>
                </span>
              </div>

              {/* Role & Company */}
              <div className="col-span-1 lg:col-span-4 flex flex-col justify-center">
                <h4 className="font-editorial-display text-3xl lg:text-4xl mb-3">{exp.company}</h4>
                <p className="font-editorial-mono text-sm text-ed-accent">{exp.role}</p>
              </div>

              {/* Location & Details */}
              <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
                <p className="font-editorial-body text-ed-grey-dark mb-6 leading-relaxed">
                  {exp.bullets[0]}
                </p>
                <p className="font-editorial-mono text-xs text-ed-grey-dark uppercase tracking-widest flex items-center gap-2">
                  <span>{exp.location}</span>
                  <span className="w-4 h-[1px] bg-ed-grey-dark"></span>
                  <span className="group-hover:text-ed-accent transition-colors">READ FULL &rarr;</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
