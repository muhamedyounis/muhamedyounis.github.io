import SocialLinks from "../common/SocialLinks.jsx";
import SectionNav from "./SectionNav.jsx";

function Sidebar({ profile, navItems, activeSection }) {
  return (
    <aside className="sidebar">
      <div>
        <a
          href={import.meta.env.BASE_URL}
          className="profile-lockup"
          aria-label={`${profile.name} home`}
        >
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
        </a>
        <SectionNav items={navItems} activeSection={activeSection} />
        <a className="secondary-link mt-8 inline-flex" href={profile.resumeUrl} target="_blank" rel="noreferrer">
          View CV
        </a>
      </div>
      <SocialLinks links={profile.socialLinks} />
    </aside>
  );
}

export default Sidebar;
