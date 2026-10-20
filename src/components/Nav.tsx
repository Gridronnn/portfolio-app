"use client";

import {
  User,
  Info,
  GraduationCap,
  Briefcase,
  GitBranch,
  Code2,
  BookOpen,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/content/meta";

export default function Nav() {
  const githubSocial = siteConfig.socials.find((s) => s.label.toLowerCase().includes("github"));
  const linkedinSocial = siteConfig.socials.find((s) => s.label.toLowerCase().includes("linkedin"));

  return (
    <nav className="navrow" aria-label="Main Navigation">
      {/* Social Links (Top on desktop, left on mobile) */}
      <div className="sidenav">
        {githubSocial && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="GitHub (@Gridronnn)"
            href={githubSocial.href}
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        )}
        {linkedinSocial && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip="LinkedIn"
            href={linkedinSocial.href}
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Section Anchors (Bottom on desktop, right on mobile) */}
      <div className="sidenav">
        <a data-tooltip="Home" href="#home" aria-label="Go to Home section">
          <User className="w-5 h-5" />
        </a>
        <a data-tooltip="About" href="#about" aria-label="Go to About section">
          <Info className="w-5 h-5" />
        </a>
        <a data-tooltip="Education" href="#edu" aria-label="Go to Education section">
          <GraduationCap className="w-5 h-5" />
        </a>
        <a data-tooltip="Experience" href="#experience" aria-label="Go to Experience section">
          <Briefcase className="w-5 h-5" />
        </a>
        <a data-tooltip="Projects" href="#projects" aria-label="Go to Projects section">
          <GitBranch className="w-5 h-5" />
        </a>
        <a data-tooltip="Skills" href="#skills" aria-label="Go to Skills section">
          <Code2 className="w-5 h-5" />
        </a>
        <a data-tooltip="Writing" href="#blog" aria-label="Go to Writing section">
          <BookOpen className="w-5 h-5" />
        </a>
        <a data-tooltip="Contact" href="#contact" aria-label="Go to Contact section">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
