import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABISHEK P S",
  description: "SOFTWARE ENGINEER. HYDERABAD, INDIA.",
  openGraph: {
    title: "ABISHEK P S",
    description: "SOFTWARE ENGINEER. HYDERABAD, INDIA.",
    type: "website",
    locale: "en_US",
    siteName: "ABISHEK P S",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
    >
      <body>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
