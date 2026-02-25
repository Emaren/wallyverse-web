const phases = [
  {
    name: "Phase 1",
    title: "Map Mode",
    body: "Participating shops become gateways. QR/NFC scans reveal nearby wild encounters.",
  },
  {
    name: "Phase 2",
    title: "AR Sight",
    body: "Camera overlays bring Wallys into the physical world with rarity and timing modifiers.",
  },
  {
    name: "Phase 3",
    title: "VR Kingdom",
    body: "Persistent social realms where portal districts and legendary quests converge.",
  },
];

export function RoadmapTimeline() {
  return (
    <section className="roadmap-timeline" aria-label="Expedition phases">
      {phases.map((phase) => (
        <article key={phase.name} className="timeline-item">
          <p className="timeline-phase">{phase.name}</p>
          <h3>{phase.title}</h3>
          <p>{phase.body}</p>
        </article>
      ))}
    </section>
  );
}
