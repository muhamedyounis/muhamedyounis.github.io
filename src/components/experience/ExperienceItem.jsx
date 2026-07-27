import ExternalLinkIcon from '../common/ExternalLinkIcon.jsx';
import TagList from '../common/TagList.jsx';

function ExperienceItem({ experience }) {
  const content = (
    <>
      <div className="experience-period">{experience.period}</div>
      <div>
        <h3 className="group-title">
          {experience.role} · {experience.company}
          {experience.url && <ExternalLinkIcon />}
        </h3>
        {experience.previousPositions?.length ? (
          <p className="mt-1 text-sm text-muted">{experience.previousPositions.join(' · ')}</p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-secondary">{experience.description}</p>
        <TagList tags={experience.technologies} className="mt-4" />
      </div>
    </>
  );

  if (experience.url) {
    return (
      <a className="experience-item group" href={experience.url}>
        {content}
      </a>
    );
  }

  return <article className="experience-item">{content}</article>;
}

export default ExperienceItem;
