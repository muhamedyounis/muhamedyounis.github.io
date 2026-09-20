import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ProjectLightbox({ screenshots, currentIndex, onClose, onNext, onPrevious }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);
  const current = screenshots[currentIndex];

  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    document.body.classList.add('scroll-locked');
    closeRef.current?.focus();

    return () => {
      document.body.classList.remove('scroll-locked');
      previousFocusRef.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrevious();
      if (event.key !== 'Tab') return;

      const focusable = [...dialogRef.current.querySelectorAll(focusableSelector)];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, onNext, onPrevious]);

  if (!current) return null;

  return (
    <div className="lightbox-backdrop" onMouseDown={onClose}>
      <div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Project screenshot viewer"
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="lightbox-toolbar">
          <p>
            {currentIndex + 1} / {screenshots.length}
          </p>
          <button type="button" onClick={onClose} aria-label="Close screenshot viewer" ref={closeRef}>
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="lightbox-stage">
          {screenshots.length > 1 && (
            <button type="button" onClick={onPrevious} aria-label="Previous screenshot">
              <ChevronLeft aria-hidden="true" />
            </button>
          )}
          <img className="lightbox-image" src={current.src} alt={current.alt} />
          {screenshots.length > 1 && (
            <button type="button" onClick={onNext} aria-label="Next screenshot">
              <ChevronRight aria-hidden="true" />
            </button>
          )}
        </div>
        {current.caption && <p className="lightbox-caption">{current.caption}</p>}
      </div>
    </div>
  );
}

export default ProjectLightbox;
