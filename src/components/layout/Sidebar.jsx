import SocialLinks from "../common/SocialLinks.jsx";
import SectionNav from "./SectionNav.jsx";

function Sidebar({ profile, navItems, activeSection }) {
  return (
    <aside className="sidebar">
      <div>
        <a
          href="/younisdev/"
          className="profile-lockup"
          aria-label={`${profile.name} home`}
        >
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
        </a>
        <SectionNav items={navItems} activeSection={activeSection} />
      </div>
      <SocialLinks links={profile.socialLinks} />
    </aside>
  );
}

export default Sidebar;
