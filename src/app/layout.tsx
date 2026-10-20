import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abishek P S | AI-Native Software Engineer & Full-Stack Developer",
  description:
    "Computer Science Engineering student at NIET (Anna University). Focused on software development, AI/ML automation, full-stack web development, and problem solving.",
  openGraph: {
    title: "Abishek P S | AI-Native Software Engineer & Full-Stack Developer",
    description:
      "Computer Science Engineering student at NIET (Anna University). Focused on software development, AI/ML automation, full-stack web development, and problem solving.",
    type: "website",
    locale: "en_US",
    siteName: "Abishek P S",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf2f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#212529] font-sans antialiased selection:bg-[#d55121] selection:text-white">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
