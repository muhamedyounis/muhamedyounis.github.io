import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ExternalLinkIcon from '../common/ExternalLinkIcon.jsx';
import ImageWithFallback from '../common/ImageWithFallback.jsx';
import TagList from '../common/TagList.jsx';

function FeaturedProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="featured-project group">
      <ImageWithFallback
        src={project.thumbnail || project.coverImage}
        alt={`${project.title} thumbnail`}
        label={project.title}
        className="featured-project-image thumbnail-frame"
        imgClassName="project-thumbnail-image"
        width="420"
        height="260"
      />
      <div className="min-w-0">
        <p className="meta">{project.year}</p>
        <h3 className="group-title">
          {project.title}
          <ExternalLinkIcon />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">{project.summary}</p>
        {project.stars && (
          <p className="mt-3 inline-flex items-center gap-1 text-xs text-muted">
            <Star size={13} aria-hidden="true" /> {project.stars}
          </p>
        )}
        <TagList tags={project.stack?.slice(0, 5)} className="mt-4" />
      </div>
    </Link>
  );
}

export default FeaturedProjectCard;
