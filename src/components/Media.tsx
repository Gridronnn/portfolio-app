"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import Image from "next/image";

const MEDIA_ITEMS = [
  { id: 1, src: "/images/media/arch.jpg", caption: "SYS_ARCH_01" },
  { id: 2, src: "/images/media/speak1.jpg", caption: "SPEAKER_02" },
  { id: 3, src: "/images/media/speak2.jpg", caption: "SPEAKER_03" },
  { id: 4, src: "/images/media/speak3.jpg", caption: "SPEAKER_04" },
];

export default function Media() {
  return (
    <section id="media" className="bg-ed-offwhite text-ed-black py-24 lg:py-40">
      <div className="container-spacious">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-16 lg:mb-24">
          <div className="font-editorial-mono text-ed-accent lg:w-32 pt-2">
            06 / GALLERY
          </div>
          <h2 className="font-editorial-display text-4xl lg:text-7xl">
            VISUAL INDEX
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {MEDIA_ITEMS.map((item, idx) => {
            // Create asymmetric grid placement for images
            const isLarge = idx === 0 || idx === 3;
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
            
            return (
              <motion.div 
                key={item.id} 
                variants={fadeInUp}
                className={`${colSpan} flex flex-col group cursor-pointer`}
              >
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[400px] lg:h-[500px] overflow-hidden bg-ed-grey mb-6 rounded-sm">
                  <Image 
                    src={item.src} 
                    alt={item.caption} 
                    fill 
                    className="img-editorial grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex justify-between items-center font-editorial-mono text-xs text-ed-grey-dark px-2">
                  <span>{item.caption}</span>
                  <span>VOL.0{item.id}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
