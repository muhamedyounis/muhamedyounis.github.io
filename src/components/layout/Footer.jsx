import { profile } from "../../data/profile.js";
import SocialLinks from "../common/SocialLinks.jsx";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Designed and built with React. © {new Date().getFullYear()} {profile.name}.
      </p>
      <div className="mt-6 lg:hidden">
        <SocialLinks links={profile.socialLinks} compact />
      </div>
    </footer>
  );
}

export default Footer;
