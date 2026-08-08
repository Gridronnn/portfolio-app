"use client";

import { siteConfig } from "@/content/meta";
import Image from "next/image";

const FOOTER_IMAGES = [
  "/images/media/conf_talk_1.jpg",
  "/images/media/conf_talk_2.jpg",
  "/images/media/conf_talk_3.jpg",
  "/images/media/hackathon_1.jpg",
  "/images/media/panel_1.jpg",
  "/images/media/conf_talk_1.jpg",
  "/images/media/conf_talk_2.jpg",
];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#f25b2a] text-black">
      
      {/* 1. Massive 2026 Mask (Screenshot 4) */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden border-b border-black">
        <div 
          className="heading-pk text-[35vw] tracking-tighter leading-none text-mask-image"
          style={{ backgroundImage: 'url(/images/media/panel_1.jpg)' }}
        >
          2026
        </div>
      </div>

      <div className="flex justify-between items-start px-8 pt-4 pb-12 border-b border-black">
        <div className="heading-pk text-xl tracking-tighter">■ NEWSLETTER</div>
        <div className="heading-pk text-3xl md:text-5xl tracking-tight w-2/3 md:w-1/2 leading-[0.9]">
          Join the newsletter for exclusive updates on new architectures, systems and special content.
        </div>
      </div>

      {/* 2. Horizontal Image Marquee (Screenshot 5) */}
      <div className="w-full h-48 md:h-64 border-b border-black overflow-hidden flex items-center">
        <div className="marquee-container h-full w-full">
          <div className="marquee-content flex h-full">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex h-full">
                {FOOTER_IMAGES.map((src, idx) => (
                  <div key={`${i}-${idx}`} className="relative h-full aspect-square border-r border-black">
                    <Image src={src} alt="Footer gallery" fill className="object-cover grayscale hover:grayscale-0 transition-all" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The Grid Input Section (Screenshot 5) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 border-b border-black">
        <div className="h-40 border-b md:border-b-0 md:border-r border-black flex items-center justify-center hover:bg-black/5 cursor-pointer">
          <span className="body-pk text-xs tracking-wider">YOUR EMAIL HERE</span>
        </div>
        <div className="h-40 border-b md:border-b-0 md:border-r border-black flex items-center justify-center hover:bg-black/5 cursor-pointer">
          <span className="body-pk text-xs tracking-wider">PHONE (INCLUDE COUNTRY CODE)</span>
        </div>
        <div className="h-40 flex items-center justify-center hover:bg-black/5 cursor-pointer">
          <span className="body-pk text-xs tracking-wider font-bold">JOIN ABISHEK NEWSLETTER</span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-8 py-4 border-b border-black bg-[#f25b2a]">
        <div className="body-pk text-xs tracking-wider font-bold">ENTER EITHER YOUR EMAIL OR PHONE NUMBER.</div>
        <div className="body-pk text-xs tracking-wider font-bold text-left md:text-right">
          BY CLICKING JOIN, YOU AGREE TO OUR<br/>
          <span className="border-b border-black">TERMS AND CONDITIONS.</span>
        </div>
      </div>

      {/* 4. Sub-Footer (Screenshot 5 bottom) */}
      <div className="w-full bg-[#a9a9a9] text-black pt-12 pb-24 px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="body-pk text-[10px] text-black/50 mb-4 tracking-wider">LINKS</h4>
          <ul className="flex flex-col gap-1 body-pk text-xs font-bold">
            <li><a href="#projects" className="hover:opacity-50">Projects</a></li>
            <li><a href="#experience" className="hover:opacity-50">Experience</a></li>
            <li><a href="#about" className="hover:opacity-50">About</a></li>
            <li><a href="#media" className="hover:opacity-50">Media</a></li>
          </ul>
        </div>
        <div>
          <h4 className="body-pk text-[10px] text-black/50 mb-4 tracking-wider">SUPPORT</h4>
          <ul className="flex flex-col gap-1 body-pk text-xs font-bold">
            <li><a href="#" className="hover:opacity-50">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-50">Imprint</a></li>
          </ul>
        </div>
        <div>
          <h4 className="body-pk text-[10px] text-black/50 mb-4 tracking-wider">FOLLOW</h4>
          <ul className="flex flex-col gap-1 body-pk text-xs font-bold">
            {siteConfig.socials.map(social => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" className="hover:opacity-50">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
