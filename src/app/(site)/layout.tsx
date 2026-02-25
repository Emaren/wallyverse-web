import Link from "next/link";
import type { ReactNode } from "react";

import { ArcNav } from "@/components/site/ArcNav";
import { SiteAmbient } from "@/components/site/SiteAmbient";
import { footerNav, primaryNav } from "@/lib/wallyverse-content";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <SiteAmbient />
      <header className="site-header">
        <p className="brand-mark">Wallyverse</p>
        <ArcNav items={primaryNav} />
        <Link href="/connect" className="wallet-link">
          Connect Wallet
        </Link>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <ArcNav items={footerNav} compact />
      </footer>
    </div>
  );
}
