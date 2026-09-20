import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, GitBranch } from 'lucide-react';
import { getProjectBySlug, getProjectNeighbors } from '../data/projects.js';
import ExternalLinkIcon from '../components/common/ExternalLinkIcon.jsx';
import ImageWithFallback from '../components/common/ImageWithFallback.jsx';
import TagList from '../components/common/TagList.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageTitle from '../components/layout/PageTitle.jsx';
import ProjectGallery from '../components/projects/ProjectGallery.jsx';
import ProjectNavigation from '../components/projects/ProjectNavigation.jsx';

function ProjectNotFound() {
  return (
    <>
      <PageTitle title="Project Not Found" />
      <main id="main-content" className="page-shell not-found">
        <p className="meta">Missing project</p>
        <h1>That project is not in the archive.</h1>
        <p className="text-secondary">The URL may be outdated, or the project may not have been added yet.</p>
        <Link to="/projects" className="primary-link">
          View project archive
        </Link>
      </main>
    </>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <ProjectNotFound />;

  const { previous, next } = getProjectNeighbors(project.slug);
  const details = [
    ['Role', project.role],
    ['Timeline', project.duration],
    ['Client', project.client],
    ['Status', project.status],
  ];

  return (
    <>
      <PageTitle title={project.title} />
      <main id="main-content" className="page-shell detail-page">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={18} aria-hidden="true" /> Back to projects
        </Link>

        <header className="detail-hero">
          <p className="meta">
            {project.year} · {project.category}
          </p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="detail-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} className="primary-link">
                Live Site <ExternalLinkIcon />
              </a>
            )}
            {project.repositoryUrl && (
              <a href={project.repositoryUrl} className="secondary-link">
                <GitBranch size={18} aria-hidden="true" /> Source Code
              </a>
            )}
          </div>
        </header>

        <ImageWithFallback
          src={project.coverImage}
          alt={`${project.title} cover image`}
          label={project.title}
          className="detail-cover"
          width="1280"
          height="760"
          imgClassName="detail-cover-image"
          loading="eager"
        />

        <section className="detail-section">
          <div>
            <h2>Project Overview</h2>
            {project.description?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="project-facts" aria-label="Project facts">
            {details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value || 'TBD'}</dd>
              </div>
            ))}
          </aside>
        </section>

        <section className="detail-section single">
          <h2>Technology</h2>
          <TagList tags={project.stack} />
        </section>

        <section className="detail-section">
          <div>
            <h2>Key Highlights</h2>
            <ul className="detail-list">
              {(project.highlights?.length ? project.highlights : ['No highlights recorded for this project.']).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Challenges and Solutions</h2>
            {(project.challenges?.length ? project.challenges : [{ title: 'More details soon', description: 'This section is ready for project notes.' }]).map(
              (challenge) => (
                <article className="challenge" key={challenge.title}>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="detail-section single">
          <h2>Screenshot Gallery</h2>
          <ProjectGallery screenshots={project.screenshots} />
        </section>

        <section className="detail-section single">
          <h2>Outcome</h2>
          <ul className="detail-list">
            {(project.outcome?.length ? project.outcome : ['No outcome details recorded for this project.']).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <ProjectNavigation previous={previous} next={next} />
        <Footer />
      </main>
    </>
  );
}

export default ProjectDetailPage;
