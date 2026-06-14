import { getExperiences } from "../data/experiences";

// Format a year range: single year if start == end (or no start), else "2021–2023".
const yearLabel = (e) => {
  const end = e.end ?? e.year;
  const start = e.start ?? e.year;
  if (!end) return "";
  return start && start !== end ? `${start}–${end}` : `${end}`;
};

// A resume-style section: section header + a list of timeline rows.
// Renders nothing if there are no entries of this kind.
export const ExperienceSection = ({ title, kind }) => {
  const entries = getExperiences(kind);
  if (entries.length === 0) return null;

  return (
    <section className="exp-section">
      <h2 className="mono-label exp-heading">{title}</h2>
      <div className="exp-list">
        {entries.map((e) => (
          <div key={e.id} className="exp-row">
            <span className="exp-year">{yearLabel(e)}</span>
            <div className="exp-body">
              <div className="exp-role">{e.role}</div>
              <div className="exp-org">
                {e.org}
                {e.location ? ` · ${e.location}` : ""}
              </div>
              {e.description && <p className="exp-desc">{e.description}</p>}
              {e.bullets?.length > 0 && (
                <ul className="exp-bullets">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
