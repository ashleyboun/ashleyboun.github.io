import { ProjectPageLeft } from "./ProjectPgLeftCol";
import { Flipbook } from "./Flipbook";

const pad = (n) => String(n).padStart(2, "0");

// An image entry can be a plain filename ("foo.png") or an object
// { src, caption }. Normalize to the object form so rendering is uniform.
const normalizeImage = (img) =>
  typeof img === "string" ? { src: img, caption: "" } : img;

// Polaroid-style photocards for each image, captioned beneath.
const ImagePlates = ({ title, imageList }) =>
  imageList.map((img, i) => {
    const { src, caption } = normalizeImage(img);
    return (
      <figure key={`${src}-${i}`} className="project-plate">
        <div className="plate-photo">
          <img
            src={src}
            alt={`${title} — ${caption || `image ${i + 1}`}`}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="plate-caption">
          {caption || `IMG.${pad(i + 1)}`}
        </figcaption>
      </figure>
    );
  });

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
  flipbookPages = [],
  pdf,
  format,
  cover,
}) => {
  const isFlipbook = format === "flipbook";
  const pages = flipbookPages.length ? flipbookPages : imageList;
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
          {isFlipbook && (
            <Flipbook cover={cover} title={title} pages={pages} pdf={pdf} />
          )}
          <ImagePlates title={title} imageList={imageList} />
        </div>
      </div>
    </div>
  );
};
