"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "$ initializing system...",
  "loading modules ████████░░ 80%",
  "loading modules ██████████ 100%",
  "$ ready.",
];

const LINE_DELAY = 250; // ms per line
const EXIT_DELAY = 200; // ms after last line before exit

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);

  const triggerExit = useCallback(() => {
    setIsExiting(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  // Skip on click/keypress
  useEffect(() => {
    const handleSkip = () => triggerExit();
    window.addEventListener("click", handleSkip, { once: true });
    window.addEventListener("keydown", handleSkip, { once: true });
    return () => {
      window.removeEventListener("click", handleSkip);
      window.removeEventListener("keydown", handleSkip);
    };
  }, [triggerExit]);

  // Auto-type lines
  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) {
      const exitTimer = setTimeout(triggerExit, EXIT_DELAY);
      return () => clearTimeout(exitTimer);
    }

    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, LINE_DELAY);

    return () => clearTimeout(timer);
  }, [visibleLines, triggerExit]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      onComplete();
    }
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
          role="status"
          aria-label="Loading"
          aria-live="polite"
        >
          <div className="max-w-md w-full px-6">
            <div className="space-y-2 font-mono text-sm">
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    i === BOOT_LINES.length - 1
                      ? "text-accent font-bold"
                      : "text-muted"
                  }
                >
                  {line}
                  {i === visibleLines - 1 && (
                    <span className="blink ml-1 inline-block w-2 h-4 bg-accent align-middle" />
                  )}
                </motion.p>
              ))}
            </div>
            <p className="label-mono mt-8 text-muted/50 text-xs">
              press any key to skip
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
