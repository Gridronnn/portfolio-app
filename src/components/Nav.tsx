"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] bg-white text-black py-6 px-8 border-b-[1px] border-black/10"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <motion.a
          href="#"
          variants={fadeInUp}
          className="flex items-center justify-center w-10 h-10 border-2 border-black rounded-full font-bold text-sm tracking-tighter"
        >
          AP
        </motion.a>

        {/* Links */}
        <motion.ul
          className="hidden md:flex items-center justify-end gap-12 w-full pr-12"
          variants={staggerContainer}
        >
          {NAV_LINKS.map((link) => (
            <motion.li key={link.href} variants={fadeInUp}>
              <a
                href={link.href}
                className="body-pk text-sm hover:text-black/50 transition-colors capitalize"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile menu simple toggle text */}
        <motion.button variants={fadeInUp} className="md:hidden body-pk text-sm">
          Menu
        </motion.button>
      </nav>
    </motion.header>
  );
}
