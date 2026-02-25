import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const headingFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "700", "900"],
});

const bodyFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wallyverse",
  description: "Portal-first 13-page Wallyverse launch scaffold",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
