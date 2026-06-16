// Auto-collects every file in ./experiences/*.js — no manual list to maintain.
// Add an experience = add a file in ./experiences/. It shows up automatically.
const modules = import.meta.glob("./experiences/*.js", { eager: true });

// Ongoing roles (current: true) sort above everything; otherwise by end
// year, then start year, most recent first.
const endValue = (e) => (e.current ? Infinity : e.end ?? e.year ?? 0);

export const experiences = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort(
    (a, b) =>
      endValue(b) - endValue(a) ||
      (b.start ?? b.year ?? 0) - (a.start ?? a.year ?? 0)
  );

export const getExperiences = (kind) =>
  kind ? experiences.filter((e) => e.kind === kind) : experiences;
