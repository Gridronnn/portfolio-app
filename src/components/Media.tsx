"use client";

import Image from "next/image";

const MEDIA_ITEMS = [
  {
    id: 1,
    src: "/images/media/arch_aura_security.png",
    title: "Aura Finance: OAuth 2.0 PKCE & PostgreSQL RLS",
    tag: "AUTH & RLS",
  },
  {
    id: 2,
    src: "/images/media/arch_fileflow_agents.png",
    title: "FileFlow AI: Agentic Document & Classification Pipeline",
    tag: "AI PIPELINE",
  },
  {
    id: 3,
    src: "/images/media/arch_interactive_engine.png",
    title: "The Day You Entered the World: Web Audio & Canvas Synthesizer",
    tag: "AUDIO & CANVAS",
  },
  {
    id: 4,
    src: "/images/media/arch_security_hardening.png",
    title: "Production Defense-in-Depth & Next.js Security Architecture",
    tag: "ZERO-TRUST",
  },
];

export default function Media() {
  return (
    <section id="media" className="py-16 md:py-24 border-b border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        System Architecture &amp; Engineering Diagrams
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {MEDIA_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group bg-[#faf7f5] border border-[#ebdcd7] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#faf2f0]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                unoptimized
                className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="p-4 flex items-center justify-between font-mono text-xs text-[#595959] border-t border-[#ebdcd7]">
              <span className="font-medium text-[#242424]">{item.title}</span>
              <span className="text-[#d55121] bg-[#faf2f0] px-2 py-0.5 rounded border border-[#eddcd8] font-semibold">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
