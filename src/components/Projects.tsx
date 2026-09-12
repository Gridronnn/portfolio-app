"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import Image from "next/image";
import { projects, Project } from "@/content/projects";

function ProjectLayoutA({ project }: { project: Project }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 group items-center"
    >
      {/* Text Side */}
      <div className="col-span-1 lg:col-span-7 flex flex-col order-2 lg:order-1">
        <div className="font-editorial-mono text-ed-accent mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-ed-accent"></span>
          03.{project.index} / {project.year}
        </div>
        <h3 className="font-editorial-display text-5xl md:text-7xl lg:text-8xl mb-8 group-hover:text-ed-accent transition-colors duration-500">
          {project.title}
        </h3>
        <p className="font-editorial-body text-lg max-w-xl text-ed-grey-dark mb-12">
          {project.description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between font-editorial-mono text-xs border-t border-ed-grey pt-6 gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-ed-grey-dark">
            {project.stack.slice(0, 4).map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <a 
            href={project.github || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-ed-accent shrink-0"
          >
            VIEW PROJECT &rarr;
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="col-span-1 lg:col-span-5 order-1 lg:order-2">
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-ed-grey rounded-sm">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="img-editorial grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectLayoutB({ project }: { project: Project }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="mb-32 group bg-ed-accent text-ed-offwhite rounded-sm overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image Side (Left) */}
        <div className="col-span-1 lg:col-span-6 relative aspect-square lg:aspect-auto">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="img-editorial opacity-90 group-hover:scale-105 transition-all duration-700"
          />
        </div>

        {/* Text Side (Right) */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center p-10 lg:p-20">
          <div className="font-editorial-mono text-ed-offwhite/70 mb-8 flex items-center gap-4">
             <span className="w-8 h-[1px] bg-ed-offwhite/50"></span>
             03.{project.index} / {project.role}
          </div>
          <h3 className="font-editorial-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9]">
            {project.title}
          </h3>
          <p className="font-editorial-body text-lg max-w-lg text-ed-offwhite/90 mb-12">
            {project.description}
          </p>
          
          <div>
            <a 
              href={project.github || "#"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block border border-ed-offwhite px-8 py-4 font-editorial-mono text-sm hover:bg-ed-offwhite hover:text-ed-accent transition-colors"
            >
              EXPLORE ARCHITECTURE
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectLayoutC({ project }: { project: Project }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32 group"
    >
      {/* Title & Desc Column */}
      <div className="col-span-1 lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
        <div className="font-editorial-mono text-ed-accent mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-ed-accent"></span>
          03.{project.index}
        </div>
        <h3 className="font-editorial-display text-5xl md:text-7xl lg:text-8xl mb-8 group-hover:text-ed-accent transition-colors">
          {project.title}
        </h3>
        <p className="font-editorial-body text-lg text-ed-grey-dark mb-10">
          {project.description}
        </p>
        <div className="font-editorial-mono text-xs flex flex-col gap-3 text-ed-grey-dark border-l-2 border-ed-grey pl-4">
          <span>ROLE: {project.role}</span>
          <span>YEAR: {project.year}</span>
          <span>IMPACT: {project.metrics || "N/A"}</span>
        </div>
      </div>

      {/* Image Column */}
      <div className="col-span-1 lg:col-span-7 h-[50vh] lg:h-auto relative overflow-hidden bg-ed-grey rounded-sm order-1 lg:order-2">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="img-editorial grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-ed-offwhite text-ed-black py-24 lg:py-40">
      <div className="container-spacious">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-24 lg:mb-40 border-b border-ed-grey pb-16">
          <div className="font-editorial-mono text-ed-accent lg:w-32 pt-2">
            03 / SELECTED WORK
          </div>
          <h2 className="font-editorial-display text-5xl lg:text-7xl">
            ENGINEERING AT SCALE
          </h2>
        </div>

        {/* Projects Feed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project, idx) => {
            // Cycle through layouts A, B, C
            const layoutType = idx % 3;
            if (layoutType === 0) return <ProjectLayoutA key={project.id} project={project} />;
            if (layoutType === 1) return <ProjectLayoutB key={project.id} project={project} />;
            return <ProjectLayoutC key={project.id} project={project} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
