import { projectTypes } from "../data/projects";

// Renders [all] + every project type as monospace chips.
// `active` is the currently selected type ("all" = no filter).
export const TagFilter = ({ active, onChange }) => {
  const options = ["all", ...projectTypes];

  return (
    <nav className="tag-filter">
      <span className="filter-label">filter</span>
      {options.map((type) => (
        <button
          key={type}
          className={active === type ? "active" : ""}
          onClick={() => onChange(type)}
        >
          {type === "all" ? "[all]" : `#${type}`}
        </button>
      ))}
    </nav>
  );
};

export default TagFilter;
