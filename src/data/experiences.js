// Auto-collects every file in ./experiences/*.js — no manual list to maintain.
// Add an experience = add a file in ./experiences/. It shows up automatically.
const modules = import.meta.glob("./experiences/*.js", { eager: true });

export const experiences = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => (b.end ?? b.year ?? 0) - (a.end ?? a.year ?? 0)); // most recent first

export const getExperiences = (kind) =>
  kind ? experiences.filter((e) => e.kind === kind) : experiences;
