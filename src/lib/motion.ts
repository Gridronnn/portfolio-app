/**
 * Framer Motion animation variants and constants.
 * Updated for the Brutalist style (Snappy, rigid, linear).
 */

import type { Variants, Transition } from "framer-motion";

export const brutalTransition: Transition = {
  type: "tween",
  ease: [0.76, 0, 0.24, 1], // Sharp cubic bezier
  duration: 0.6,
};

export const staggerChildren: Transition = {
  staggerChildren: 0.05,
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: brutalTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: staggerChildren,
  },
};
