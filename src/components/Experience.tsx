"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { experiences } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-[#9bf68c] text-black border-b border-black">
      
      {/* Table Header */}
      <div className="w-full grid grid-cols-[15%_40%_35%_10%] px-8 py-4 border-b border-black font-sans font-black text-sm tracking-wide uppercase text-black/60">
        <div>DATE / YEAR</div>
        <div>COMPANY / ROLE</div>
        <div>LOCATION</div>
        <div className="text-right">DETAILS</div>
      </div>

      {/* Table Rows (The Experience Items) */}
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {experiences.map((exp, idx) => (
          <motion.div 
            key={exp.id}
            variants={fadeInUp}
            className="w-full grid grid-cols-[15%_40%_35%_10%] px-8 py-6 border-b border-black font-sans font-black text-lg lg:text-xl tracking-wide uppercase hover:bg-black/5 transition-colors cursor-pointer"
          >
            <div>{exp.startDate} - {exp.endDate}</div>
            <div>
              {exp.company} <span className="font-bold opacity-70">— {exp.role}</span>
            </div>
            <div>{exp.location}</div>
            <div className="text-right">VIEW</div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Block */}
      <div className="w-full px-8 py-8 border-b border-black">
        <a 
          href="#" 
          className="flex items-center justify-center w-full py-16 border border-black hover:bg-black hover:text-[#9bf68c] rounded-2xl transition-all"
        >
          <span className="font-sans font-black text-lg tracking-wide uppercase">VIEW ALL EXPERIENCE</span>
        </a>
      </div>

      {/* Green Image Block (Screenshot 3 style) */}
      <div className="w-full h-[60vh] grid grid-cols-2">
        <div className="bg-[#9bf68c]" />
        <div 
          className="h-full w-full bg-cover bg-center mix-blend-multiply opacity-90"
          style={{ backgroundImage: 'url(/images/media/panel_1.jpg)', backgroundColor: '#9bf68c' }}
        />
      </div>

    </section>
  );
}
