import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="offline-page">
      <article className="offline-card">
        <p className="offline-eyebrow">Offline Mode</p>
        <h1>Portal Signal Lost</h1>
        <p>
          You are currently offline. Reconnect to continue exploring the Wallyverse,
          or reopen the portal when your signal returns.
        </p>
        <Link href="/landing" className="sigil-button">
          Return To Landing
        </Link>
      </article>
    </main>
  );
}
