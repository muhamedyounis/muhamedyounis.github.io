import { profile } from '../../data/profile.js';
import SocialLinks from '../common/SocialLinks.jsx';

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Designed and built with React and Tailwind CSS. Created with accessibility and performance in
        mind.
      </p>
      <p>
        &copy; {new Date().getFullYear()} {profile.name}.{' '}
        <a href={profile.sourceUrl} target="_blank" rel="noreferrer">
          Source code
        </a>
      </p>
      <div className="mt-6 lg:hidden">
        <SocialLinks links={profile.socialLinks} compact />
      </div>
    </footer>
  );
}

export default Footer;
