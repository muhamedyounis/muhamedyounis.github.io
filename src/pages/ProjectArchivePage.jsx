import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { profile } from '../data/profile.js';
import { projectCategories, projects } from '../data/projects.js';
import PageTitle from '../components/layout/PageTitle.jsx';
import Footer from '../components/layout/Footer.jsx';
import ProjectGrid from '../components/projects/ProjectGrid.jsx';

function ProjectArchivePage() {
  const [category, setCategory] = useState('All');
  const filteredProjects = useMemo(
    () => (category === 'All' ? projects : projects.filter((project) => project.category === category)),
    [category],
  );

  return (
    <>
      <PageTitle title="Projects" />
      <main id="main-content" className="page-shell archive-page">
        <Link to="/#projects" className="back-link">
          <ArrowLeft size={18} aria-hidden="true" /> Back to home
        </Link>
        <header className="archive-header">
          <p className="meta">{projects.length} projects</p>
          <h1>Project Archive</h1>
          <p>
            A data-driven collection of polished placeholder projects. Replace the content in
            `src/data/projects.js` to make this archive your own.
          </p>
        </header>
        <div className="filter-bar" aria-label="Filter projects by category">
          {projectCategories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              className={category === item ? 'active' : ''}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        <ProjectGrid projects={filteredProjects} showImage />
        <Footer profile={profile} />
      </main>
    </>
  );
}

export default ProjectArchivePage;
