import SocialLinks from '../common/SocialLinks.jsx';
import SectionNav from './SectionNav.jsx';

function MobileHeader({ profile, navItems, activeSection }) {
  return (
    <header className="mobile-header">
      <div className="page-shell py-10">
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>
        <SocialLinks links={profile.socialLinks} compact />
      </div>
      <SectionNav items={navItems} activeSection={activeSection} mobile />
    </header>
  );
}

export default MobileHeader;
