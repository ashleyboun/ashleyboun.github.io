import { useEffect, useState } from "react";
import { getProjectsByType } from "../data/projects";

// Responsive column count (matches the CSS breakpoints below).
const colCountFor = (w) => (w <= 600 ? 1 : w <= 900 ? 2 : 3);

const ProjectCard = ({ p }) =>
  p.placeholder ? (
    <div className="project-card is-placeholder">
      <div className="frame frame-empty">
        <span>coming soon</span>
      </div>
      <div className="body">
        <div className="title">{p.title}</div>
        <div className="row">
          <span className="tag-chip">#{p.type}</span>
          <span className="loc">{p.year}</span>
        </div>
      </div>
    </div>
  ) : (
    <a className="project-card" href={`/#/project/${p.id}`}>
      <div className="frame">
        <img src={p.cover} alt={p.title} loading="lazy" decoding="async" />
      </div>
      <div className="body">
        <div className="title">{p.title}</div>
        {p.description && <p className="card-desc">{p.description}</p>}
        <div className="row">
          <span className="tag-chip">#{p.type}</span>
          <span className="loc">{p.year}</span>
        </div>
      </div>
    </a>
  );

// Distribute projects into `cols` column buckets. When there are 3 columns,
// a project's optional `column` field (1-3) pins it to that column; anything
// unassigned drops into the currently-shortest column (by card count). The
// optional `row` field then orders cards within their column (lower = higher
// up; unassigned cards keep their default order below the pinned ones). With
// fewer columns (tablet/mobile) both fields are ignored and projects fill in
// order so reading order stays sensible.
const bucketize = (projects, cols) => {
  const buckets = Array.from({ length: cols }, () => []);
  if (cols >= 3) {
    projects.forEach((p) => {
      const pinned = p.column >= 1 && p.column <= cols ? p.column - 1 : null;
      const target =
        pinned ??
        buckets.reduce(
          (min, b, i) => (b.length < buckets[min].length ? i : min),
          0
        );
      buckets[target].push(p);
    });
    // Stable sort each column by `row` (unassigned sink to the bottom).
    buckets.forEach((b) =>
      b.sort((a, c) => (a.row ?? Infinity) - (c.row ?? Infinity))
    );
  } else {
    projects.forEach((p, i) => buckets[i % cols].push(p));
  }
  return buckets;
};

// Data-driven, masonry-style grid built from explicit column buckets so
// projects can be assigned to a column via their `column` field.
export const ProjectGrid = ({ active = "all" }) => {
  const shown = getProjectsByType(active);
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const update = () => setCols(colCountFor(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (shown.length === 0) {
    return <p className="empty-state">no projects tagged #{active}.</p>;
  }

  const buckets = bucketize(shown, cols);

  return (
    <div className="project-grid">
      {buckets.map((col, ci) => (
        <div className="grid-col" key={ci}>
          {col.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
