"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({ children }: ShellProps) {
  useSmoothScroll();

  return (
    <>
      <Nav />
      <div className="resume-content">
        <main className="max-w-5xl mx-auto px-6 md:px-12" role="main">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
