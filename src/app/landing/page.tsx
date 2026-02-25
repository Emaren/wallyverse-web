export default function LandingPage() {
  return (
    <main className="landing-page" aria-label="Wallyverse Landing">
      <picture className="landing-picture">
        <source media="(max-width: 900px)" srcSet="/wv-mobile.png" />
        <img
          src="/pwv.png"
          alt="Enter the Wallyverse landing artwork"
          className="landing-image"
          loading="eager"
          decoding="async"
        />
      </picture>
    </main>
  );
}
