export const ProjectPageLeft = ({
  type,
  year,
  instructor,
  location,
  course,
  date,
  teamMembers,
  description,
}) => {
  return (
    <div className="project-meta">
      {type && (
        <div className="tag-chip" style={{ marginBottom: 14 }}>
          #{type}
          {year ? ` · ${year}` : ""}
        </div>
      )}

      {location && (
        <>
          <strong>location</strong>
          <p className="value">{location}</p>
        </>
      )}

      {course && (
        <>
          <strong>course</strong>
          <p className="value">
            {course}
            {date ? ` / ${date}` : ""}
          </p>
        </>
      )}

      {instructor && (
        <>
          <strong>instructor</strong>
          <p className="value">{instructor}</p>
        </>
      )}

      {teamMembers && teamMembers.length > 0 && (
        <>
          <strong>team</strong>
          <p className="value">{teamMembers.join(", ")}</p>
        </>
      )}

      {description && <p className="description">{description}</p>}
    </div>
  );
};
