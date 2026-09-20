import { Link } from 'react-router-dom';
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
              <p>Hi, I&apos;m Mohamed — a frontend web developer based in Cairo, Egypt.</p>
              <p>
                I create polished, responsive websites that help organizations present their work clearly
                and give visitors a smooth path to take action. My strongest experience is with
                <strong> WordPress and WooCommerce</strong>, alongside modern frontend development with
                JavaScript and React.
              </p>
              <p>
                I care about the details that make a site feel trustworthy: clear content hierarchy,
                reliable responsive behavior, accessible interactions, and fast-loading pages.
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

          <section id="contact" className="section-block scroll-mt-28" aria-labelledby="contact-heading">
            <SectionHeading id="contact-heading" subtle>Contact</SectionHeading>
            <div className="contact-card">
              <p className="meta">Have a project or opportunity?</p>
              <h2>Let&apos;s build something useful.</h2>
              <p className="text-secondary">
                I&apos;m available for frontend development, WordPress builds, WooCommerce stores, and website improvements.
              </p>
              <a className="primary-link mt-6 inline-flex" href={`mailto:${profile.email}`}>
                {profile.email} <ExternalLinkIcon />
              </a>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}

export default HomePage;
