import ProjectCard from './ProjectCard.jsx';

function ProjectGrid({ projects = [], showImage = false }) {
  if (!projects.length) {
    return <p className="text-secondary">No projects match this filter yet.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.slug} showImage={showImage} />
      ))}
    </div>
  );
}

export default ProjectGrid;
