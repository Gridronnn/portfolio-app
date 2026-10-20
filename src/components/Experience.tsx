"use client";

import { experiences } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        Work Experience
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      <div className="space-y-12">
        {experiences.map((exp, idx) => {
          const isLast = idx === experiences.length - 1;

          return (
            <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              {/* Mobile Timeline connector */}
              <div className="progcirc_md" />
              {!isLast && <div className="progline_md" />}

              {/* Left Column: Organization & Dates */}
              <div className="md:col-span-4 lg:col-span-3 pl-8 md:pl-0 md:pr-8 md:text-right relative">
                {/* Desktop Timeline connector */}
                <div className="progcirc" />
                {!isLast && <div className="progline" />}

                <p className="minhead text-base md:text-lg">{exp.company}</p>
                <p className="font-mono text-xs text-[#d55121] mt-1 font-medium">
                  {exp.startDate} — {exp.endDate}
                </p>
                <p className="font-sans text-xs text-[#777777] mt-0.5">{exp.location}</p>
              </div>

              {/* Right Column: Role & Details */}
              <div className="md:col-span-8 lg:col-span-9 pl-8 md:pl-6">
                <p className="minhead text-base md:text-lg mb-2">{exp.role}</p>
                <ul className="space-y-2 text-[#444444] text-sm md:text-[0.95rem] leading-relaxed list-disc list-outside ml-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
