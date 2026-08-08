"use client";

import Image from "next/image";
import { useState } from "react";

const ARCHIVE_ITEMS = [
  { id: "1", title: "CRONITIS BOY", image: "/images/media/panel_1.jpg" },
  { id: "2", title: "LIVE 2024", image: "/images/media/conf_talk_1.jpg" },
  { id: "3", title: "BACKSTAGE", image: "/images/media/conf_talk_2.jpg" },
  { id: "4", title: "THE IMPACT", image: "/images/media/conf_talk_3.jpg" },
  { id: "5", title: "STUDIO SESSIONS", image: "/images/media/conf_talk_4.jpg" },
];

export default function Media() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="media">
      {/* Top transition with pixelated blocks (Screenshot 1) */}
      <div className="relative w-full h-[80vh] overflow-hidden border-t border-black/20">
        <Image 
          src="/images/media/conf_talk_1.jpg" 
          alt="Gallery Transition background" 
          fill 
          className="object-cover object-top"
        />
        
        {/* Pixel mask overlay - static representation of the staircase */}
        <div className="pixel-mask-grid z-10">
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

      <div className="flex justify-between items-start px-8 pt-4 pb-20 bg-[#d6d6d6] border-b border-black/10">
        <div className="heading-pk text-2xl tracking-tighter">■ GALLERY</div>
        <div className="body-pk text-sm w-1/3">
          Explore Abishek&apos;s carefully curated photo and video gallery taken by various leading visual artists, photographers and videographers through his entire career.
        </div>
      </div>

      {/* CASCADING STACK GALLERY (Screenshot 2) */}
      <div className="relative w-full h-screen bg-[#d6d6d6] flex flex-col justify-center items-center overflow-hidden border-b border-black/20">
        <div className="absolute left-8 body-pk text-xs font-bold">01/08</div>
        <div className="absolute right-8 flex gap-4 body-pk text-xs font-bold cursor-pointer">
          <span className="hover:opacity-50 transition-opacity">Prev</span>
          <span className="hover:opacity-50 transition-opacity">Next</span>
        </div>

        {/* Dropping Stack Simulation */}
        <div className="relative w-[50vw] max-w-[500px] aspect-square flex justify-center items-end">
          {/* Back image */}
          <div className="absolute top-[0%] w-[60%] aspect-video z-10 brightness-50">
             <Image src="/images/media/conf_talk_1.jpg" alt="bg3" fill className="object-cover" />
          </div>
          {/* Mid image */}
          <div className="absolute top-[5%] w-[70%] aspect-video z-20 brightness-75">
             <Image src="/images/media/conf_talk_3.jpg" alt="bg2" fill className="object-cover" />
          </div>
          {/* Front-Mid image */}
          <div className="absolute top-[15%] w-[85%] aspect-video z-30 brightness-90">
             <Image src="/images/media/panel_1.jpg" alt="bg1" fill className="object-cover grayscale" />
          </div>
          {/* Foreground Active Image */}
          <div className="absolute bottom-0 w-full h-[80%] z-40 bg-black">
             <Image src="/images/media/conf_talk_2.jpg" alt="Foreground" fill className="object-cover grayscale" />
          </div>
        </div>
      </div>

      {/* VIDEO ARCHIVE (Screenshot 3) */}
      <div className="relative w-full min-h-screen bg-black text-white pt-24 pb-32 px-8 flex flex-col">
        <div className="flex w-full justify-between items-start mb-20 flex-1">
          {/* Left: Massive Numbers */}
          <div className="w-1/2 flex flex-col justify-between h-full">
            <div className="heading-pk text-[15vw] leading-none tracking-tighter">
              {(activeIdx + 1).toString().padStart(2, "0")}/
              {ARCHIVE_ITEMS.length.toString().padStart(2, "0")}
            </div>
            
            <div className="body-pk text-xs text-white/50 mt-auto pb-12">
              Directed by Engineering Team<br/>
              Animation by WebGL<br/>
              Produced by Abishek P S
            </div>
          </div>

          {/* Right: Main Video Frame */}
          <div className="w-1/2 pr-12">
            <div className="mb-4">
              <h4 className="body-pk text-sm font-bold tracking-tight">
                Abishek P S - {ARCHIVE_ITEMS[activeIdx].title}<br/>
                <span className="text-white/70">(Official Architecture)</span>
              </h4>
            </div>
            <div className="relative w-full aspect-video border border-white/20 overflow-hidden">
              <Image 
                src={ARCHIVE_ITEMS[activeIdx].image} 
                alt="Archive video" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="absolute bottom-8 left-8 right-8 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {ARCHIVE_ITEMS.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`relative w-40 aspect-video flex-shrink-0 cursor-pointer border ${activeIdx === idx ? 'border-white' : 'border-white/20 opacity-50 hover:opacity-100'} transition-all`}
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
