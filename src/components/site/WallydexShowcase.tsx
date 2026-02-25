const creatures = [
  { name: "Groovy", rarity: "Common", trait: "Steady temperament" },
  { name: "Snout Sprite", rarity: "Common", trait: "Food-driven lure" },
  { name: "Fluff", rarity: "Common", trait: "Hyper-reactive" },
  { name: "Glimrock", rarity: "Rare", trait: "Shielded shell" },
  { name: "Glowloth", rarity: "Rare", trait: "Light-burst sprint" },
  { name: "Shibcrypt", rarity: "Rare", trait: "Coin magnet" },
  { name: "QRuffs", rarity: "Glitchy", trait: "Signal scramble" },
  { name: "Noctwyrm", rarity: "Mythic", trait: "Dragon precursor" },
];

export function WallydexShowcase() {
  return (
    <section className="wallydex-grid" aria-label="Wallydex preview">
      {creatures.map((creature) => (
        <article key={creature.name} className="wallydex-card">
          <p className="wallydex-rarity">{creature.rarity}</p>
          <h3>{creature.name}</h3>
          <p>{creature.trait}</p>
        </article>
      ))}
    </section>
  );
}
