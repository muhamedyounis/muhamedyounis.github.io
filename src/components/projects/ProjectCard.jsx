import { Link } from 'react-router-dom';
import { GitBranch, Star } from 'lucide-react';
import ExternalLinkIcon from '../common/ExternalLinkIcon.jsx';
import ImageWithFallback from '../common/ImageWithFallback.jsx';
import TagList from '../common/TagList.jsx';

function ProjectCard({ project, showImage = false }) {
  return (
    <article className="small-project">
      {showImage && (
        <Link to={`/projects/${project.slug}`} className="block">
          <ImageWithFallback
            src={project.thumbnail || project.coverImage}
            alt={`${project.title} preview`}
            label={project.title}
            className="mb-5 aspect-[16/10]"
            width="480"
            height="300"
          />
        </Link>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="meta">
            {project.year} · {project.category}
          </p>
          <h3>
            <Link to={`/projects/${project.slug}`} className="group-title">
              {project.title}
              <ExternalLinkIcon />
            </Link>
          </h3>
        </div>
        <div className="flex shrink-0 gap-2 text-muted" aria-hidden="true">
          {project.repositoryUrl && <GitBranch size={18} />}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-secondary">{project.summary}</p>
      {project.stars && (
        <p className="mt-4 inline-flex items-center gap-1 text-xs text-muted">
          <Star size={13} aria-hidden="true" /> {project.stars}
        </p>
      )}
      <TagList tags={project.stack?.slice(0, 4)} className="mt-4" />
    </article>
  );
}

export default ProjectCard;
