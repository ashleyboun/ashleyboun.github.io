import { useParams } from "react-router-dom";
import { ProjectPage } from "../components/ProjectPage";
import { getProject } from "../data/projects";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return (
      <div style={{ padding: "20vh 20px", textAlign: "center" }}>
        <p style={{ marginBottom: "1rem" }}>project not found</p>
        <a href="/#/">← back to home</a>
      </div>
    );
  }

  return (
    <ProjectPage
      title={project.title}
      type={project.type}
      year={project.year}
      location={project.location}
      instructor={project.instructor}
      course={project.course}
      date={project.term}
      teamMembers={project.team}
      description={project.description}
      imageList={project.images}
      flipbookPages={project.flipbook}
      pdf={project.pdf}
      format={project.format}
      cover={project.cover}
    />
  );
};

export default ProjectDetail;
