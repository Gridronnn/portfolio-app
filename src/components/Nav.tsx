"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const NAV_LINKS = [
  { label: "WORK", href: "#projects", num: "01" },
  { label: "EXPERIENCE", href: "#experience", num: "02" },
  { label: "ABOUT", href: "#about", num: "03" },
  { label: "WRITING", href: "#blog", num: "04" },
  { label: "CONTACT", href: "#contact", num: "05" },
];

export default function Nav() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] bg-ed-offwhite/95 backdrop-blur-sm text-ed-black py-6 transition-all"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <nav className="container-spacious flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          variants={fadeInUp}
          className="font-editorial-display text-2xl lg:text-3xl tracking-wide"
        >
          ABISHEK P S
        </motion.a>

        {/* Links */}
        <motion.ul
          className="hidden lg:flex items-center justify-end gap-10"
          variants={staggerContainer}
        >
          {NAV_LINKS.map((link) => (
            <motion.li key={link.href} variants={fadeInUp}>
              <a
                href={link.href}
                className="font-editorial-mono hover:text-ed-accent transition-colors flex items-center gap-2 group"
              >
                <span className="text-ed-grey-dark group-hover:text-ed-accent transition-colors">{link.num}</span>
                <span>/ {link.label}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile menu toggle */}
        <motion.button variants={fadeInUp} className="lg:hidden font-editorial-mono hover:text-ed-accent">
          MENU
        </motion.button>
      </nav>
    </motion.header>
  );
}
