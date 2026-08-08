"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useCustomCursor } from "@/hooks/useCustomCursor";

interface ShellProps {
  children: React.ReactNode;
}

/**
 * Shell wraps the entire page with:
 * - Lenis smooth scroll
 * - Custom terminal cursor
 * - Preloader (terminal boot)
 * - Fixed navigation
 * - Footer
 */
export default function Shell({ children }: ShellProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize smooth scroll and custom cursor
  useSmoothScroll();
  useCustomCursor();

  return (
    <>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Nav />
        <main className="relative z-10" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
