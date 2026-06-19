/**
 * Single source of truth for all site copy & data.
 * Swap placeholders for real content here — components read from this file.
 */

export const studio = {
  name: "LAST STOP",
  nameLine2: "GAMES",
  tagline: "An indie game studio building worlds in our spare time.",
  // Placeholder until real copy exists.
  blurb:
    "We're a small crew making the kind of games we wish existed. Pixel-perfect worlds, weird ideas, no publishers telling us no. [placeholder copy]",
};

export const nav = [
  { label: "Games", href: "#games" },
  { label: "Studio", href: "#studio" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Devlog", href: "#devlog" },
];

// Scrolling marquee items (top of page)
export const tickerItems = [
  "NOW IN DEVELOPMENT",
  "★",
  "WISHLIST ON STEAM SOON",
  "★",
  "JOIN OUR DISCORD",
  "★",
  "DEVLOG #01 IS LIVE",
  "★",
  "MADE IN OUR SPARE TIME",
  "★",
];

export const studioStats = [
  { label: "Games in dev", value: "02" },
  { label: "Team members", value: "04" },
  { label: "Coffees / day", value: "∞" },
];

// "Our Games" grid — replace color/label with real cover art later.
export const games = [
  { id: "g1", title: "Project Nova", status: "In Development", color: "#ff5fa2" },
  { id: "g2", title: "Untitled RPG", status: "Prototype", color: "#5fe0ff" },
  { id: "g3", title: "Game 03", status: "Concept", color: "#ffd45f" },
  { id: "g4", title: "Game 04", status: "Concept", color: "#a07cff" },
  { id: "g5", title: "Game 05", status: "Concept", color: "#7cff9e" },
  { id: "g6", title: "Game 06", status: "Concept", color: "#ff9e5f" },
];

// Roadmap milestones
export const roadmap = [
  { quarter: "Q1", title: "Studio Launch", done: true },
  { quarter: "Q2", title: "First Playable", done: true },
  { quarter: "Q3", title: "Vertical Slice", done: false },
  { quarter: "Q4", title: "Early Access", done: false },
];

// Team — pixel avatars are color placeholders for now.
export const team = [
  { id: "t1", name: "Member 01", role: "Code", color: "#ff5fa2" },
  { id: "t2", name: "Member 02", role: "Art", color: "#5fe0ff" },
  { id: "t3", name: "Member 03", role: "Design", color: "#ffd45f" },
  { id: "t4", name: "Member 04", role: "Audio", color: "#a07cff" },
];

// Devlog feed (replaces the "Latest Transactions" table)
export const devlog = [
  { id: "d1", tag: "DEVLOG", title: "Setting up the studio", date: "3 days ago", author: "Member 01" },
  { id: "d2", tag: "ART", title: "First character sprites", date: "1 week ago", author: "Member 02" },
  { id: "d3", tag: "DESIGN", title: "Combat loop notes", date: "2 weeks ago", author: "Member 03" },
  { id: "d4", tag: "AUDIO", title: "Main theme demo", date: "3 weeks ago", author: "Member 04" },
];

export const socials = [
  { label: "Discord", href: "#" },
  { label: "Steam", href: "#" },
  { label: "Bluesky", href: "#" },
  { label: "YouTube", href: "#" },
];
