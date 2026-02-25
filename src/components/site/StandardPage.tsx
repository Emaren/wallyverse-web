import type { ReactNode } from "react";

import { getPage, type PageKey } from "@/lib/wallyverse-content";

import { PageFrame } from "./PageFrame";

type StandardPageProps = {
  pageKey: PageKey;
  children?: ReactNode;
};

export function StandardPage({ pageKey, children }: StandardPageProps) {
  const page = getPage(pageKey);

  return (
    <PageFrame page={page}>
      <section className="sigil-grid" aria-label={`${page.label} highlights`}>
        {page.cards.map((card) => (
          <article key={card.title} className="sigil-card">
            {card.accent ? <p className="sigil-card-accent">{card.accent}</p> : null}
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </article>
        ))}
      </section>
      {children}
    </PageFrame>
  );
}
