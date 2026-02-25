import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="landing-page" aria-label="Wallyverse Landing">
      <Image
        src="/pwv.png"
        alt="Enter the Wallyverse landing artwork"
        fill
        priority
        sizes="100vw"
        className="landing-image"
      />
    </main>
  );
}
