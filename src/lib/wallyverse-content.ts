export type MoodPreset =
  | "violetStorm"
  | "emberSky"
  | "aetherMist"
  | "astralGold"
  | "nightPulse";

export type PageKey =
  | "portal"
  | "updates"
  | "events"
  | "faq"
  | "forShops"
  | "game"
  | "lore"
  | "privacy"
  | "roadmap"
  | "shopConsole"
  | "shops"
  | "wallydex"
  | "connect";

export type NavItem = {
  href: string;
  label: string;
};

export type ShowcaseCard = {
  title: string;
  body: string;
  accent?: string;
};

export type WallyPage = {
  key: PageKey;
  href: string;
  label: string;
  artwork: string;
  banner: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  mood: MoodPreset;
  cards: ShowcaseCard[];
};

export const primaryNav: NavItem[] = [
  { href: "/landing", label: "Portal" },
  { href: "/shops", label: "Shops" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/updates", label: "Updates" },
  { href: "/faq", label: "FAQ" },
  { href: "/connect", label: "Connect" },
];

export const footerNav: NavItem[] = [
  { href: "/landing", label: "Portal" },
  { href: "/shops", label: "Shops" },
  { href: "/wallydex", label: "Wallydex" },
  { href: "/game", label: "Game" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/events", label: "Events" },
  { href: "/for-shops", label: "For Shops" },
  { href: "/shop-console", label: "Shop Console" },
  { href: "/lore", label: "Lore" },
  { href: "/updates", label: "Updates" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/connect", label: "Connect" },
];

const pages: Record<PageKey, WallyPage> = {
  portal: {
    key: "portal",
    href: "/landing",
    label: "Portal",
    artwork: "/wv-vio.png",
    banner: "Enter The Wallyverse",
    headline: "A Pocket Creature Saga Anchored To Real Shops",
    description:
      "Tap into the portal, hatch your first Wally, and follow dispatches as the world shifts from map mode to full ritual hunts.",
    ctaLabel: "Begin Your Journey",
    ctaHref: "/connect",
    mood: "violetStorm",
    cards: [
      {
        title: "Scan / Bait / Seal",
        body: "Signature encounter loop with pinch-to-seal capture ritual.",
        accent: "Hunter Ritual",
      },
      {
        title: "Shop Gateways",
        body: "Local shops become portals that anchor eggs, hunts, and seasonal stories.",
        accent: "World Layer",
      },
      {
        title: "Wally Legacy",
        body: "Every hatch writes a history. Bonds matter, and every Wally has a path.",
        accent: "Companion Layer",
      },
    ],
  },
  updates: {
    key: "updates",
    href: "/updates",
    label: "Updates",
    artwork: "/wv-upd.png",
    banner: "/updates",
    headline: "Devlog / Dispatches",
    description:
      "Production notes, lore dispatches, and launch milestones from the Outlander team.",
    ctaLabel: "Join Dispatch List",
    ctaHref: "/connect",
    mood: "astralGold",
    cards: [
      {
        title: "Build Notes",
        body: "Portal effects, interaction passes, and release branches.",
        accent: "Devlog",
      },
      {
        title: "Dispatches",
        body: "Narrative drops that preview hunts, creatures, and districts.",
        accent: "Lore",
      },
      {
        title: "Archives",
        body: "Pinned milestones so new tamers can catch up fast.",
        accent: "History",
      },
    ],
  },
  events: {
    key: "events",
    href: "/events",
    label: "Events",
    artwork: "/wv-events.png",
    banner: "Seasons + Hunts",
    headline: "Live Hunts Across The Wallyverse",
    description:
      "Timed hunts, district modifiers, and seasonal rewards tuned for shop traffic and player progression.",
    ctaLabel: "See Current Hunt",
    ctaHref: "/connect",
    mood: "emberSky",
    cards: [
      {
        title: "Dark Carnival",
        body: "October hunt line with pumpkin variants and a glitch-chain finale.",
        accent: "Ends In 15 Days",
      },
      {
        title: "Tamer Rewards",
        body: "Event relics, rare bait, and lore emblems tied to participation.",
        accent: "Season Loot",
      },
      {
        title: "Shop Activation",
        body: "Participating shops unlock custom event modifiers and quests.",
        accent: "Gateway Boost",
      },
    ],
  },
  faq: {
    key: "faq",
    href: "/faq",
    label: "FAQ",
    artwork: "/wv-faq.png",
    banner: "Quick Answers",
    headline: "Hunter Toolkit FAQ",
    description:
      "Everything new tamers ask before their first encounter.",
    ctaLabel: "Read Game Loop",
    ctaHref: "/game",
    mood: "aetherMist",
    cards: [
      {
        title: "Need Crypto?",
        body: "No. Exploration and taming are free in Phase 0.",
        accent: "No Purchase Required",
      },
      {
        title: "How To Catch",
        body: "Scan for traits, bait for control, then seal with the wallet sigil.",
        accent: "Pinch To Seal",
      },
      {
        title: "Safe Shops",
        body: "Participating shops are curated gateways and family-safe zones.",
        accent: "Verified Gateways",
      },
    ],
  },
  forShops: {
    key: "forShops",
    href: "/for-shops",
    label: "For Shops",
    artwork: "/wv-for-shops.png",
    banner: "Become A Shop",
    headline: "Turn Your Location Into A Portal",
    description:
      "Anchor eggs, host hunts, and attract repeat visits through progression-driven gameplay.",
    ctaLabel: "Apply As Gateway",
    ctaHref: "/connect",
    mood: "astralGold",
    cards: [
      {
        title: "Foot Traffic",
        body: "Tamers follow active portals and seasonal clues to your storefront.",
        accent: "Acquisition",
      },
      {
        title: "Loyalty Bridge",
        body: "Merge your existing rewards with creature progression loops.",
        accent: "Retention",
      },
      {
        title: "Story Placement",
        body: "Appear in dispatches and district map narratives.",
        accent: "Brand Layer",
      },
    ],
  },
  game: {
    key: "game",
    href: "/game",
    label: "Game",
    artwork: "/wv-game.png",
    banner: "Mechanics Of The Wallyverse",
    headline: "Scan. Bait. Seal.",
    description:
      "Encounter design is gesture-first: decode the creature, control the moment, and execute the ritual.",
    ctaLabel: "View Wallydex",
    ctaHref: "/wallydex",
    mood: "violetStorm",
    cards: [
      {
        title: "Scan",
        body: "Reveal resistances, habits, and ideal timing windows.",
        accent: "Intel",
      },
      {
        title: "Bait",
        body: "Use items to redirect behavior and boost capture chance.",
        accent: "Control",
      },
      {
        title: "Seal",
        body: "Pinch your sigil at peak resonance to complete capture.",
        accent: "Execution",
      },
      {
        title: "Portal Circles",
        body: "Circle gestures build energy and may pull hidden loot.",
        accent: "Ritual",
      },
    ],
  },
  lore: {
    key: "lore",
    href: "/lore",
    label: "Lore",
    artwork: "/wv-lore.png",
    banner: "The Myth Of The Wallyverse",
    headline: "The Legendary Egg And The Sleeping Dragon",
    description:
      "Wallys are fractured sparks from a deeper code. Train enough fragments and a dragon can awaken.",
    ctaLabel: "Read Dispatches",
    ctaHref: "/updates",
    mood: "aetherMist",
    cards: [
      {
        title: "Legendary Egg",
        body: "Ancient eggs surface near wallet-linked gateways.",
        accent: "Origin",
      },
      {
        title: "Hatching",
        body: "A hatch imprints to the first tamer that stabilizes it.",
        accent: "Bond",
      },
      {
        title: "Dragon Path",
        body: "Rare shard unions can trigger a dragon awakening quest.",
        accent: "Endgame",
      },
    ],
  },
  privacy: {
    key: "privacy",
    href: "/privacy",
    label: "Privacy",
    artwork: "/wv-privacy.png",
    banner: "Your Privacy Is Sacred",
    headline: "Minimal Data, Maximum Control",
    description:
      "Wallyverse keeps collection intentionally narrow and never stores wallet private keys.",
    ctaLabel: "Join Waitlist",
    ctaHref: "/connect",
    mood: "nightPulse",
    cards: [
      {
        title: "Minimal Data",
        body: "Only what is needed for account-free launch metrics and waitlist delivery.",
        accent: "Limited Scope",
      },
      {
        title: "No Third-Party Sale",
        body: "No ad-network resale, no data brokerage.",
        accent: "Policy",
      },
      {
        title: "Wallet Security",
        body: "Connected wallet signatures stay client-side.",
        accent: "Custody",
      },
    ],
  },
  roadmap: {
    key: "roadmap",
    href: "/roadmap",
    label: "Roadmap",
    artwork: "/wv-roadmap.png",
    banner: "Expedition Map",
    headline: "From Map Mode To VR Kingdom",
    description:
      "Three phased rollout designed for fast launch, steady content velocity, and feature hardening.",
    ctaLabel: "Track Updates",
    ctaHref: "/updates",
    mood: "astralGold",
    cards: [
      {
        title: "Phase 1: Map Mode",
        body: "Shop portals, QR/NFC entry points, and encounter routing.",
        accent: "Now",
      },
      {
        title: "Phase 2: AR Sight",
        body: "Live overlay encounters and district hunt modifiers.",
        accent: "Next",
      },
      {
        title: "Phase 3: VR Kingdom",
        body: "Persistent portal realms with shared social progression.",
        accent: "Later",
      },
    ],
  },
  shopConsole: {
    key: "shopConsole",
    href: "/shop-console",
    label: "Shop Console",
    artwork: "/wv-shop-console.png",
    banner: "Shop Console",
    headline: "Operator Dashboard Preview",
    description:
      "A first look at tools for gateways: eggs, rewards, and seasonal campaign controls.",
    ctaLabel: "Become A Shop",
    ctaHref: "/for-shops",
    mood: "emberSky",
    cards: [
      {
        title: "Egg Controls",
        body: "Set hatch windows and rarity rules by time slot.",
        accent: "Configuration",
      },
      {
        title: "Reward Rules",
        body: "Issue loyalty bonuses for visits and event completions.",
        accent: "Retention",
      },
      {
        title: "Portal Health",
        body: "View scans, seals, and conversion to repeat visits.",
        accent: "Analytics",
      },
    ],
  },
  shops: {
    key: "shops",
    href: "/shops",
    label: "Shops",
    artwork: "/wv-shops.png",
    banner: "Shops",
    headline: "Participating And Potential Gateways",
    description:
      "Browse active anchors first, then explore potential districts where new portals can open.",
    ctaLabel: "Become A Gateway",
    ctaHref: "/for-shops",
    mood: "aetherMist",
    cards: [
      {
        title: "Participating Shops",
        body: "Verified portals where hunts are currently active.",
        accent: "Live",
      },
      {
        title: "Potential Shops",
        body: "Interest list for future districts and partner expansions.",
        accent: "Pipeline",
      },
      {
        title: "Distance Bands",
        body: "Find nearby hunts and expansion requests by location tier.",
        accent: "Discovery",
      },
    ],
  },
  wallydex: {
    key: "wallydex",
    href: "/wallydex",
    label: "Wallydex",
    artwork: "/wv-wallydex.png",
    banner: "Wallydex",
    headline: "Catalog The Creatures Of The Realm",
    description:
      "Track rarity tiers, abilities, and temperament signals while expanding your collection.",
    ctaLabel: "Learn Capture Loop",
    ctaHref: "/game",
    mood: "violetStorm",
    cards: [
      {
        title: "Rarity Tiers",
        body: "Common, Rare, Glitchy, and Mythic classifications.",
        accent: "Progression",
      },
      {
        title: "Trait Notes",
        body: "Likes, dislikes, and behavior triggers per entry.",
        accent: "Strategy",
      },
      {
        title: "Collection Signals",
        body: "Unlock lore and rewards as sets are completed.",
        accent: "Completion",
      },
    ],
  },
  connect: {
    key: "connect",
    href: "/connect",
    label: "Connect",
    artwork: "/pwv.png",
    banner: "Connect Wallet (Soon)",
    headline: "Join The Waitlist",
    description:
      "Wallet connection is coming. For now, join the dispatch list for launch calls, hunt alerts, and partner openings.",
    ctaLabel: "Submit Email",
    ctaHref: "#waitlist",
    mood: "nightPulse",
    cards: [
      {
        title: "Outlander Dispatches",
        body: "Launch notes and feature drops direct to your inbox.",
        accent: "Email Feed",
      },
      {
        title: "Shop Signals",
        body: "Partner program updates for local businesses.",
        accent: "B2B Track",
      },
      {
        title: "Wallet Beta",
        body: "Early access call when overlay wallet testing starts.",
        accent: "Invite",
      },
    ],
  },
};

export function getPage(key: PageKey): WallyPage {
  return pages[key];
}

export function getPageByHref(pathname: string): WallyPage {
  const matched = Object.values(pages).find((page) => page.href === pathname);
  return matched ?? pages.portal;
}

export function getMoodFromPath(pathname: string): MoodPreset {
  return getPageByHref(pathname).mood;
}
