"use client";

import { Bot, Globe, ShieldCheck, Binary } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: Bot,
    title: "AI-Native & Agents",
    desc: "Developing intelligent workflow automations, agentic prototypes, and integrating AI assistance into file management and financial tooling.",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Engineering",
    desc: "Building and deploying modern web applications using React, Next.js, Node.js, Vite, and Tailwind CSS with fluid Framer Motion interactions.",
  },
  {
    icon: ShieldCheck,
    title: "Backend & Application Security",
    desc: "Implementing OAuth 2.0 PKCE, PostgreSQL Row-Level Security (RLS) data isolation, Content Security Policy (CSP), and HSTS protection.",
  },
  {
    icon: Binary,
    title: "Data Structures & Algorithms",
    desc: "Strengthening core computer science fundamentals through daily problem-solving, algorithmic analysis, and object-oriented design in Java and Python.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        Engineering Profile &amp; Focus
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 text-[#333333] space-y-4 text-base md:text-[1.05rem] leading-relaxed">
          <p>
            I am driven by a deep curiosity for how scalable software systems and AI agents interact.
            From crafting interactive frontends to architecting hardened database schemas, I focus on
            building software that is secure, fast, and user-centric.
          </p>
          <p className="text-[#595959]">
            My approach combines practical product development—shipping end-to-end applications to Vercel—with
            unwavering dedication to core computer science fundamentals in Data Structures &amp; Algorithms.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FOCUS_AREAS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 bg-[#faf7f5] border border-[#ebdcd7] rounded-lg transition-transform hover:-translate-y-1 duration-200"
              >
                <div className="w-9 h-9 rounded bg-[#faf2f0] border border-[#eadbd6] flex items-center justify-center text-[#d55121] mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-mono text-base font-semibold text-[#242424] mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#595959] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
