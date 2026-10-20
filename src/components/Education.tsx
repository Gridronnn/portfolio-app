"use client";

import { GraduationCap, BookOpenCheck } from "lucide-react";
import { siteConfig } from "@/content/meta";

export default function Education() {
  const edu = siteConfig.education;

  return (
    <section id="edu" className="py-16 md:py-24 border-b border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        Education & Academic Background
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Mobile timeline connectors */}
        <div className="progcirc_md" />

        {/* Left Column: Institution & Dates */}
        <div className="md:col-span-4 lg:col-span-3 pl-8 md:pl-0 md:pr-8 md:text-right relative">
          <div className="progcirc" />
          <p className="minhead text-base md:text-lg">{edu.institution}</p>
          <p className="font-mono text-xs text-[#d55121] mt-1 font-medium">{edu.graduationYear}</p>
          <p className="font-sans text-xs text-[#777777] mt-0.5">{edu.location}</p>
        </div>

        {/* Right Column: Degree & Coursework */}
        <div className="md:col-span-8 lg:col-span-9 pl-8 md:pl-6 space-y-4">
          <div>
            <h3 className="minhead text-base md:text-lg text-[#242424] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#d55121]" />
              <span>{edu.degree}</span>
            </h3>
            <p className="font-mono text-xs text-[#666666] mt-1">Affiliated with {edu.university}</p>
          </div>

          <div className="pt-2">
            <p className="font-mono text-xs font-semibold text-[#242424] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpenCheck className="w-4 h-4 text-[#d55121]" />
              <span>Relevant Coursework</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 bg-[#faf7f5] border border-[#ebdcd7] rounded text-xs font-mono text-[#444444]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
