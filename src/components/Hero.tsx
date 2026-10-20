"use client";

import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { siteConfig } from "@/content/meta";

export default function Hero() {
  return (
    <section id="home" className="pt-10 md:pt-16 pb-16 md:pb-24 border-b border-[#e5e5e5]">
      {/* Greeting Title */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#242424] font-normal tracking-tight mb-10 md:mb-14">
        Hi, I&apos;m Abishek
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Portrait */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-[#faf2f0] shadow-sm border border-[#e8deda]">
            <Image
              src="/images/media/abishek_portrait.jpg"
              alt={siteConfig.name}
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Center Column: Bio paragraphs */}
        <div className="md:col-span-8 lg:col-span-5 text-[#333333] text-base md:text-[1.05rem] leading-relaxed space-y-4">
          <p>
            I am a <strong>Computer Science Engineering student</strong> at{" "}
            {siteConfig.education.institution}, focused on software development, AI-Native Software
            Engineering, AI/ML Automation &amp; Agents, full-stack web development, and problem solving.
          </p>
          <p>
            {siteConfig.description}
          </p>
          <p className="text-[#595959]">
            Actively building and deploying full-stack web applications, exploring AI-assisted workflows,
            and strengthening core fundamentals in Java, Python, and Data Structures &amp; Algorithms.
          </p>
        </div>

        {/* Right Column: Personal Information Card */}
        <div className="md:col-span-12 lg:col-span-4 bg-[#faf7f5] border border-[#ebdcd7] rounded-lg p-6">
          <h2 className="font-mono text-lg font-semibold text-[#242424] mb-4 pb-2 border-b border-[#eadbd6]">
            Personal Information
          </h2>
          <ul className="space-y-3 font-sans text-sm text-[#444444]">
            <li>
              <strong className="text-[#242424]">Name:</strong> {siteConfig.name}
            </li>
            <li>
              <strong className="text-[#242424]">Role:</strong> {siteConfig.title}
            </li>
            <li>
              <strong className="text-[#242424]">Location:</strong> {siteConfig.location}
            </li>
            <li>
              <strong className="text-[#242424]">Email:</strong>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#d55121] hover:underline hover:text-[#ab5232] font-mono text-xs sm:text-sm break-all"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <strong className="text-[#242424]">Contact:</strong>{" "}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-[#d55121] hover:underline hover:text-[#ab5232] font-mono text-xs sm:text-sm"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <strong className="text-[#242424]">Degree:</strong> B.E. CSE (Class of 2029)
            </li>
            <li>
              <strong className="text-[#242424]">Status:</strong> {siteConfig.availability}
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#d55121] hover:bg-[#ab5232] text-white font-mono text-xs uppercase tracking-wider rounded transition-colors"
            >
              <Mail className="w-3.5 h-3.5" /> Contact Me
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=Resume Request - ${siteConfig.name}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#faf2f0] text-[#242424] border border-[#d55121] font-mono text-xs uppercase tracking-wider rounded transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#d55121]" /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
