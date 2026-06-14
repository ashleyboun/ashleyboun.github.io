import { ProjectPageLeft } from "./ProjectPgLeftCol";
import { Flipbook } from "./Flipbook";

const pad = (n) => String(n).padStart(2, "0");

// An image entry can be a plain filename ("foo.png") or an object
// { src, caption }. Normalize to the object form so rendering is uniform.
const normalizeImage = (img) =>
  typeof img === "string" ? { src: img, caption: "" } : img;

export const ProjectPage = ({
  title,
  type,
  year,
  location,
  instructor,
  course,
  date,
  teamMembers,
  description,
  imageList = [],
  format,
  cover,
}) => {
  const isFlipbook = format === "flipbook";
  return (
    <div className="project-detail">
      <div className="project-topbar">
        <a href="/#/">← home</a>
      </div>

      <div className="project-layout">
        <aside className="project-sidebar">
          <div className="project-title">{title}</div>
          <ProjectPageLeft
            type={type}
            year={year}
            instructor={instructor}
            location={location}
            course={course}
            date={date}
            teamMembers={teamMembers}
            description={description}
          />
        </aside>

        <div className="project-images">
          {isFlipbook ? (
            <Flipbook cover={cover} title={title} pages={imageList} />
          ) : (
            imageList.map((img, i) => {
              const { src, caption } = normalizeImage(img);
              return (
                <figure key={`${src}-${i}`} className="project-plate">
                  <div className="plate-photo">
                    <img
                      src={src}
                      alt={`${title} — ${caption || `image ${i + 1}`}`}
                    />
                  </div>
                  <figcaption className="plate-caption">
                    {caption || `IMG.${pad(i + 1)}`}
                  </figcaption>
                </figure>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
