import skills from "../data/skills";

// Categorized skill lists — not a timeline, so a simple grid of category groups.
export const SkillsBlock = () => {
  if (!skills?.length) return null;

  return (
    <section className="exp-section">
      <h2 className="mono-label exp-heading">skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skills-group">
            <div className="mono-label">{group.category}</div>
            <ul className="skills-items">
              {group.items.map((item) => (
                <li key={item} className="tag-chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBlock;
