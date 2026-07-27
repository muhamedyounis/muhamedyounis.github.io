import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function ProjectNavigation({ previous, next }) {
  if (!previous && !next) return null;

  return (
    <nav className="project-nav-links" aria-label="Project navigation">
      {previous && (
        <Link to={`/projects/${previous.slug}`}>
          <ArrowLeft size={18} aria-hidden="true" />
          <span>
            <small>Previous</small>
            {previous.title}
          </span>
        </Link>
      )}
      {next && (
        <Link to={`/projects/${next.slug}`} className="text-right">
          <span>
            <small>Next</small>
            {next.title}
          </span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}

export default ProjectNavigation;
