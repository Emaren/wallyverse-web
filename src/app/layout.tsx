import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import type { ReactNode } from "react";

import { PwaRegistrar } from "@/components/pwa/PwaRegistrar";

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
  description: "Portal-first 14-page Wallyverse launch scaffold",
  applicationName: "Wallyverse",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Wallyverse",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#120726",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
        <PwaRegistrar />
      </body>
    </html>
  );
}
