import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

import type { WallyPage } from "@/lib/wallyverse-content";

type PageFrameProps = {
  page: WallyPage;
  children: ReactNode;
};

export function PageFrame({ page, children }: PageFrameProps) {
  const style = {
    "--page-artwork": `url("${page.artwork}")`,
  } as CSSProperties;

  return (
    <article className="page-frame" style={style}>
      <header className="hero-plaque">
        <p className="hero-banner">{page.banner}</p>
        <h1 className="hero-title">{page.headline}</h1>
        <p className="hero-description">{page.description}</p>
        <div className="hero-cta-row">
          <Link href={page.ctaHref} className="sigil-button">
            {page.ctaLabel}
          </Link>
        </div>
      </header>
      {children}
    </article>
  );
}
