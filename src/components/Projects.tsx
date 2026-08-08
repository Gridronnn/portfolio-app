"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#cfcdcc] text-black">
      
      {/* Top transition with pixelated blocks (Screenshot 10/1 and new green tint screenshot) */}
      <div className="relative w-full h-[100vh] overflow-hidden border-t border-black/20 bg-black">
        {/* Green Tint Overlay Effect */}
        <div className="absolute inset-0 z-0 bg-[#9bf68c]" />
        <div className="absolute inset-0 z-0 mix-blend-multiply opacity-90">
          <Image 
            src="/images/media/panel_1.jpg" 
            alt="Transition background" 
            fill 
            className="object-cover object-center grayscale"
          />
        </div>
        
        {/* Pixel mask overlay - static representation of the staircase */}
        <div className="pixel-mask-grid">
          {/* We place blocks in specific grid areas to create the jagged staircase mask */}
          <div className="pixel-block" style={{ gridArea: '8 / 1 / 11 / 4' }} />
          <div className="pixel-block" style={{ gridArea: '7 / 3 / 11 / 6' }} />
          <div className="pixel-block" style={{ gridArea: '6 / 5 / 11 / 8' }} />
          <div className="pixel-block" style={{ gridArea: '8 / 7 / 11 / 10' }} />
          <div className="pixel-block" style={{ gridArea: '6 / 9 / 11 / 12' }} />
          <div className="pixel-block" style={{ gridArea: '4 / 11 / 11 / 14' }} />
          <div className="pixel-block" style={{ gridArea: '5 / 13 / 11 / 16' }} />
          <div className="pixel-block" style={{ gridArea: '7 / 15 / 11 / 18' }} />
          <div className="pixel-block" style={{ gridArea: '9 / 17 / 11 / 20' }} />
          <div className="pixel-block" style={{ gridArea: '6 / 19 / 11 / 21' }} />
        </div>
      </div>

      <div className="flex justify-between items-start px-8 pt-4 pb-20 border-b border-black/10">
        <div className="heading-pk text-2xl tracking-tighter">■ PROJECTS</div>
        <div className="body-pk text-sm w-1/4">Explore the open-source architectures.</div>
      </div>

      {/* The Vinyl Display (Screenshot 8) */}
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen border-t border-black/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Left: Spinning Vinyl */}
        <div className="flex items-center justify-center p-12 overflow-hidden border-r border-black/20">
          <div className="relative w-full max-w-[800px] aspect-square rounded-full overflow-hidden spin-slow grayscale border border-black/10">
            <Image 
              src="/images/media/conf_talk_2.jpg" 
              alt="Vinyl record"
              fill
              className="object-cover scale-150"
            />
            {/* Center Hole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#cfcdcc] rounded-full border border-black/10" />
          </div>
        </div>

        {/* Right: Text Box */}
        <div className="flex flex-col border-b border-black/20 md:border-b-0 p-8 pt-12 relative">
          
          <div className="border-t border-black/20 pt-4 mb-32">
            <h2 className="heading-pk text-2xl tracking-tight mb-2">THE PLATFORM</h2>
          </div>
          
          <div className="max-w-md ml-auto">
            <p className="body-pk text-sm mb-4">
              Available as:<br/>
              Open-Source & Cloud Hosted
            </p>
            <p className="body-pk text-black/50 text-sm">
              An architecture like an archive of complex systems. Created over several years, partly in the codebase, partly in production somewhere between scalable microservices and raw performance. This unique atmosphere is deeply imprinted on the logic, making &quot;THE PLATFORM&quot; Abishek&apos;s most robust engineering work yet.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full grid grid-cols-2 border-t border-black/20">
            <a href="#" className="flex items-center justify-center py-8 border-r border-black/20 hover:bg-black/5 transition-colors">
              <span className="body-pk text-xs tracking-wider">VIEW GITHUB</span>
            </a>
            <a href="#" className="flex items-center justify-center py-8 hover:bg-black/5 transition-colors">
              <span className="body-pk text-xs tracking-wider">LIVE DEMO</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
