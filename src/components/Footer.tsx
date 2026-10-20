"use client";

import { MapPin, Mail, Phone, ArrowUp, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/content/meta";

export default function Footer() {
  const githubSocial = siteConfig.socials.find((s) => s.label.toLowerCase().includes("github"));
  const linkedinSocial = siteConfig.socials.find((s) => s.label.toLowerCase().includes("linkedin"));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-16 md:pt-24 pb-12 border-t border-[#e5e5e5]">
      <h2 className="font-serif text-3xl md:text-4xl text-[#242424] font-normal tracking-tight">
        Contact Me
      </h2>
      <hr className="my-6 border-[#e5e5e5]" />

      {/* 3 Contact Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 text-center">
        {/* Location */}
        <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-[#faf7f5] border border-[#ebdcd7] rounded-lg">
          <div className="w-12 h-12 rounded-full bg-[#faf2f0] flex items-center justify-center text-[#d55121] cntctico">
            <MapPin className="w-6 h-6" />
          </div>
          <p className="font-mono text-sm font-semibold text-[#242424]">Location</p>
          <p className="font-sans text-sm text-[#595959]">{siteConfig.location}</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-[#faf7f5] border border-[#ebdcd7] rounded-lg">
          <a
            href={`mailto:${siteConfig.email}`}
            className="w-12 h-12 rounded-full bg-[#faf2f0] flex items-center justify-center text-[#d55121] cntctico"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <p className="font-mono text-sm font-semibold text-[#242424]">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-xs sm:text-sm text-[#d55121] hover:underline break-all"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Phone Contact */}
        <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-[#faf7f5] border border-[#ebdcd7] rounded-lg">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-12 h-12 rounded-full bg-[#faf2f0] flex items-center justify-center text-[#d55121] cntctico"
            aria-label="Call Direct"
          >
            <Phone className="w-6 h-6" />
          </a>
          <p className="font-mono text-sm font-semibold text-[#242424]">Phone Contact</p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-mono text-xs sm:text-sm text-[#d55121] hover:underline"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <hr className="my-8 border-[#e5e5e5] max-w-xl mx-auto opacity-70" />

      {/* Social Links & Back to Top */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          {githubSocial && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={githubSocial.href}
              className="p-2 text-[#595959] hover:text-[#d55121] transition-colors footico"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {linkedinSocial && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={linkedinSocial.href}
              className="p-2 text-[#595959] hover:text-[#d55121] transition-colors footico"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          )}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.portfolioUrl}
            className="p-2 text-[#595959] hover:text-[#d55121] transition-colors footico"
            aria-label="Live Portfolio"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#595959] hover:text-[#d55121] transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center pt-8 border-t border-[#f0e2de] mt-4 font-sans text-xs text-[#777777]">
        <p>Designed and developed by {siteConfig.name} &bull; Coimbatore, Tamil Nadu, India</p>
      </div>
    </footer>
  );
}
