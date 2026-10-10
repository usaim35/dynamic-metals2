import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Dynemic Metals - Premium Garment Accessories",
  description: "Leading manufacturer of snap buttons, buckles, eyelets, and garment accessories. Established 1999. Serving 50+ countries with international certifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${dmSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}