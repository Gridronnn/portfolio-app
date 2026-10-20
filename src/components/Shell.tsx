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

export default function Shell({ children }: ShellProps) {
  const [isLoaded, setIsLoaded] = useState(false);

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
        <div className="resume-content">
          <main className="max-w-5xl mx-auto px-6 md:px-12" role="main">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
