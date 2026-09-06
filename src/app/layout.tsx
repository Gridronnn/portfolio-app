import type { Metadata, Viewport } from "next";
import { Inter, Anton, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
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
  themeColor: "#F4F1EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${spaceMono.variable}`}
    >
      <body className="bg-ed-offwhite text-ed-black antialiased selection:bg-ed-accent selection:text-white">
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
