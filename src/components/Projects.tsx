"use client";

import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        Featured Projects
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      <div className="space-y-16">
        {projects.map((project, idx) => {
          const isLast = idx === projects.length - 1;

          return (
            <div key={project.id} className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {/* Mobile Timeline connector */}
              <div className="progcirc_md" />
              {!isLast && <div className="progline_md" />}

              {/* Left Column: Title & Timeline */}
              <div className="md:col-span-4 lg:col-span-3 pl-8 md:pl-0 md:pr-8 md:text-right relative">
                {/* Desktop Timeline connector */}
                <div className="progcirc" />
                {!isLast && <div className="progline" />}

                <p className="minhead text-base md:text-lg">{project.title}</p>
                <p className="font-mono text-xs text-[#d55121] mt-1 font-medium">{project.year}</p>
                <p className="font-sans text-xs text-[#777777] mt-0.5">{project.role}</p>
              </div>

              {/* Right Column: Stack, Description & Links */}
              <div className="md:col-span-8 lg:col-span-9 pl-8 md:pl-6 space-y-3">
                <p className="minhead text-sm md:text-base text-[#333333]">
                  {project.stack.join(" · ")}
                </p>

                <p className="text-[#444444] text-sm md:text-[0.95rem] leading-relaxed">
                  {project.description}
                </p>

                {project.metrics && (
                  <p className="inline-flex items-center gap-1.5 font-mono text-xs text-[#ab5232] bg-[#faf2f0] px-2.5 py-1 rounded border border-[#eddcd8]">
                    <Sparkles className="w-3 h-3 text-[#d55121]" />
                    {project.metrics}
                  </p>
                )}

                {/* Project Image Preview */}
                {project.image && (
                  <div
                    className={`pt-2 grid gap-4 ${
                      project.secondaryImage
                        ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
                        : "grid-cols-1 max-w-xl"
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-[#faf2f0] border border-[#e8deda] shadow-xs">
                      <Image
                        src={project.image}
                        alt={`${project.title} Preview 1`}
                        fill
                        unoptimized
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {project.secondaryImage && (
                      <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-[#faf2f0] border border-[#e8deda] shadow-xs">
                        <Image
                          src={project.secondaryImage}
                          alt={`${project.title} Preview 2`}
                          fill
                          unoptimized
                          className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                  {project.github && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="inline-flex items-center gap-1.5 text-[#242424] hover:text-[#d55121] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.live}
                      className="inline-flex items-center gap-1.5 text-[#242424] hover:text-[#d55121] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
