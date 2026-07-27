import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react';

const icons = {
  github: GitBranch,
  linkedin: BriefcaseBusiness,
  mail: Mail,
};

function SocialLinks({ links = [], compact = false }) {
  if (!links.length) return null;

  return (
    <ul className={`social-links ${compact ? 'justify-start' : ''}`} aria-label="Social links">
      {links.map((link) => {
        const Icon = icons[link.icon] || Mail;
        const isExternal = /^https?:/.test(link.url);
        return (
          <li key={link.name}>
            <a
              href={link.url}
              aria-label={link.name}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              className="social-link"
            >
              <Icon size={22} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
