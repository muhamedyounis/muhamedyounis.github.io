import { Link } from 'react-router-dom';
import { articles } from '../data/articles.js';
import { experiences } from '../data/experience.js';
import { navItems, profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { useActiveSection } from '../hooks/useActiveSection.js';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ExternalLinkIcon from '../components/common/ExternalLinkIcon.jsx';
import ExperienceList from '../components/experience/ExperienceList.jsx';
import MobileHeader from '../components/layout/MobileHeader.jsx';
import Sidebar from '../components/layout/Sidebar.jsx';
import Footer from '../components/layout/Footer.jsx';
import PageTitle from '../components/layout/PageTitle.jsx';
import FeaturedProjectCard from '../components/projects/FeaturedProjectCard.jsx';
import ProjectGrid from '../components/projects/ProjectGrid.jsx';
import ArticleList from '../components/writing/ArticleList.jsx';

function HomePage() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  const additional = projects.filter((project) => !project.featured).slice(0, 4);

  return (
    <>
      <PageTitle />
      <MobileHeader profile={profile} navItems={navItems} activeSection={activeSection} />
      <div className="page-shell home-grid">
        <Sidebar profile={profile} navItems={navItems} activeSection={activeSection} />
        <main id="main-content" className="main-flow">
          <section id="about" className="section-block scroll-mt-28" aria-labelledby="about-heading">
            <SectionHeading id="about-heading" subtle>About</SectionHeading>
            <div className="about-copy">
              <p>
                Hi there. I&apos;m a frontend engineer who enjoys building calm, resilient interfaces
                where <strong>great UX meets clean implementation</strong>.
              </p>
              <p>
                Currently, I work on product surfaces, component systems, and frontend architecture for
                teams that care about <strong>accessibility, performance, and craft</strong>.
              </p>
              <p>
                Previously, I have collaborated with product studios, platform teams, and early-stage
                companies on web apps, documentation systems, and design-led product experiments.
              </p>
              <p>
                Away from the editor, I&apos;m usually reading, sketching interface ideas, exploring new
                cities, or attempting to make better coffee than yesterday.
              </p>
            </div>
          </section>

          <section id="experience" className="section-block scroll-mt-28" aria-labelledby="experience-heading">
            <SectionHeading id="experience-heading" subtle>Experience</SectionHeading>
            <ExperienceList experiences={experiences} />
          </section>

          <section id="projects" className="section-block scroll-mt-28" aria-labelledby="projects-heading">
            <SectionHeading id="projects-heading" subtle>Projects</SectionHeading>
            <div className="space-y-5">
              {featured.map((project) => (
                <FeaturedProjectCard project={project} key={project.slug} />
              ))}
            </div>
            <div className="mt-16">
              <h3 className="mb-6 text-lg font-semibold text-primary">Additional Projects</h3>
              <ProjectGrid projects={additional} />
            </div>
            <Link to="/projects" className="inline-link mt-10 inline-flex">
              View Full Project Archive <ExternalLinkIcon />
            </Link>
          </section>

          <section id="writing" className="section-block scroll-mt-28" aria-labelledby="writing-heading">
            <SectionHeading id="writing-heading" subtle>Writing</SectionHeading>
            <ArticleList articles={articles} />
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}

export default HomePage;
