import Link from "next/link";

import { PageFrame } from "@/components/site/PageFrame";
import { getPage } from "@/lib/wallyverse-content";

export default function PortalPage() {
  const page = getPage("portal");

  return (
    <PageFrame page={page}>
      <section className="portal-core" aria-label="Portal core">
        <div className="portal-ring" />
        <div className="portal-ring portal-ring-secondary" />
        <div className="portal-center">
          <p>Enter The Wallyverse</p>
          <Link className="sigil-button" href="/connect">
            Begin Your Journey
          </Link>
        </div>
      </section>

      <section className="sigil-grid" aria-label="Portal pillars">
        {page.cards.map((card) => (
          <article key={card.title} className="sigil-card">
            {card.accent ? <p className="sigil-card-accent">{card.accent}</p> : null}
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </article>
        ))}
      </section>
    </PageFrame>
  );
}
