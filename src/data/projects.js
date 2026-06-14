// Auto-collects every file in ./projects/*.js — no manual list to maintain.
// Add a project = add a file in ./projects/. It shows up everywhere automatically.
const modules = import.meta.glob("./projects/*.js", { eager: true });

export const projects = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => b.year - a.year); // newest first

// Unique project types, in the order they first appear (newest-first).
export const projectTypes = [...new Set(projects.map((p) => p.type))];

export const getProject = (id) => projects.find((p) => p.id === id);

// Projects filtered by the active home-page type tag ("all" = no filter).
export const getProjectsByType = (active) =>
  active === "all" ? projects : projects.filter((p) => p.type === active);
