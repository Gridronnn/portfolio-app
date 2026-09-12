"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { siteConfig } from "@/content/meta";

export default function Footer() {
  return (
    <section id="contact" className="bg-ed-accent text-ed-offwhite pt-24 pb-32 lg:pt-40 lg:pb-56">
      <div className="container-spacious">
        
        {/* Massive Back Cover Statement */}
        <div className="flex flex-col border-b border-ed-offwhite/20 pb-32 lg:pb-48 mb-24 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="font-editorial-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] mb-12"
            >
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-ed-black">USEFUL.</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="font-editorial-body text-xl lg:text-3xl text-ed-offwhite/90 max-w-2xl leading-relaxed">
              {siteConfig.availability}
              <br/>
              Currently based in {siteConfig.location}.
            </motion.p>
          </motion.div>
        </div>

        {/* Grid Links Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="col-span-1 lg:col-span-6">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="font-editorial-display text-4xl lg:text-5xl hover:text-ed-black transition-colors"
            >
              {siteConfig.email.toUpperCase()}
            </a>
          </div>
          
          <div className="col-span-1 lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-editorial-mono text-sm hover:text-ed-black transition-colors"
              >
                {social.label.toUpperCase()}
              </a>
            ))}
            <div 
              className="font-editorial-mono text-sm text-ed-offwhite/50 cursor-pointer hover:text-ed-offwhite transition-colors" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              BACK TO TOP &uarr;
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
