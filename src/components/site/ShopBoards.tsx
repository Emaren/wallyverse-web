const participatingShops = [
  {
    name: "Gateway Shop",
    detail: "0.5 km • Active portal • Hunt-ready",
  },
  {
    name: "Epic Games",
    detail: "1.8 km • District feature • AR tuned",
  },
  {
    name: "Crypto Cavern",
    detail: "0.6 km • Night events • Seal trials",
  },
];

const potentialShops = ["Moonfield Cafe", "Rune Bakery", "The Copper Atlas"];

export function ShopBoards() {
  return (
    <section className="shop-board" aria-label="Shop overview">
      <div className="shop-column">
        <h3>Participating Shops</h3>
        {participatingShops.map((shop) => (
          <article key={shop.name} className="shop-row">
            <h4>{shop.name}</h4>
            <p>{shop.detail}</p>
          </article>
        ))}
      </div>
      <div className="shop-column">
        <h3>Potential Shops</h3>
        {potentialShops.map((shop) => (
          <article key={shop} className="shop-row dimmed">
            <h4>{shop}</h4>
            <p>Coming soon</p>
          </article>
        ))}
      </div>
    </section>
  );
}
