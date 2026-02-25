const dispatches = [
  {
    tag: "Pinned Dispatch",
    title: "#1 Welcome To Wallyverse",
    body: "We are breaking the digital fourth wall with focused updates, launch windows, and hunt reveals.",
    date: "April 25, 2024",
  },
  {
    tag: "Devlog",
    title: "Fortresses, Platforms, and Hunts",
    body: "Portal layers and district map tooling are now in active implementation.",
    date: "May 25, 2024",
  },
  {
    tag: "Patch Notes",
    title: "Wallyverse 1.0.0 - Geared For Adventure",
    body: "Core routes, reusable shell, and waitlist pipeline are online.",
    date: "May 27, 2024",
  },
];

export function DispatchBoard() {
  return (
    <section className="dispatch-board" aria-label="Recent dispatches">
      {dispatches.map((dispatch) => (
        <article key={dispatch.title} className="dispatch-card">
          <p className="dispatch-tag">{dispatch.tag}</p>
          <h3>{dispatch.title}</h3>
          <p>{dispatch.body}</p>
          <p className="dispatch-meta">Outlander Team • {dispatch.date}</p>
        </article>
      ))}
    </section>
  );
}
