import { profile } from '../../data/profile.js';
import ExternalLinkIcon from '../common/ExternalLinkIcon.jsx';
import ExperienceItem from './ExperienceItem.jsx';

function ExperienceList({ experiences = [] }) {
  if (!experiences.length) {
    return <p className="text-secondary">Experience entries will appear here soon.</p>;
  }

  return (
    <div>
      <div className="space-y-5">
        {experiences.map((experience) => (
          <ExperienceItem experience={experience} key={`${experience.period}-${experience.company}`} />
        ))}
      </div>
      <a className="inline-link mt-10 inline-flex" href={profile.resumeUrl}>
        View Full Resume <ExternalLinkIcon />
      </a>
    </div>
  );
}

export default ExperienceList;
