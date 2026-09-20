import { useCallback, useState } from 'react';
import ImageWithFallback from '../common/ImageWithFallback.jsx';
import ProjectLightbox from './ProjectLightbox.jsx';

function ProjectGallery({ screenshots = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((index) => (index + 1) % screenshots.length),
    [screenshots.length],
  );
  const previous = useCallback(
    () => setActiveIndex((index) => (index - 1 + screenshots.length) % screenshots.length),
    [screenshots.length],
  );

  if (!screenshots.length) {
    return (
      <div className="empty-gallery">
        <p>No screenshots are available for this project.</p>
      </div>
    );
  }

  return (
    <>
      <div className="gallery-grid">
        {screenshots.map((screenshot, index) => (
          <figure className={screenshot.featured ? 'gallery-item featured' : 'gallery-item'} key={screenshot.src}>
            <button type="button" onClick={() => setActiveIndex(index)}>
              <ImageWithFallback
                src={screenshot.src}
                alt={screenshot.alt}
                label={screenshot.caption || 'Screenshot'}
                width={screenshot.width}
                height={screenshot.height}
              />
            </button>
            {screenshot.caption && <figcaption>{screenshot.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {activeIndex !== null && (
        <ProjectLightbox
          screenshots={screenshots}
          currentIndex={activeIndex}
          onClose={close}
          onNext={next}
          onPrevious={previous}
        />
      )}
    </>
  );
}

export default ProjectGallery;
