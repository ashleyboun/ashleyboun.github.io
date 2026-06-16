import { getProjectsByType } from "../data/projects";

// Data-driven, masonry-style grid of project cards.
export const ProjectGrid = ({ active = "all" }) => {
  const shown = getProjectsByType(active);

  if (shown.length === 0) {
    return <p className="empty-state">no projects tagged #{active}.</p>;
  }

  return (
    <div className="project-grid">
      {shown.map((p) => (
        <a key={p.id} className="project-card" href={`/#/project/${p.id}`}>
          <div className="frame">
            <img src={p.cover} alt={p.title} />
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
      ))}
    </div>
  );
};

export default ProjectGrid;
