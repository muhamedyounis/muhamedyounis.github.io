import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-react';

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ProjectLightbox({ screenshots, currentIndex, onClose, onNext, onPrevious }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);
  const current = screenshots[currentIndex];
  const [zoom, setZoom] = useState(1.25);

  useEffect(() => {
    setZoom(1.25);
  }, [currentIndex]);

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
          <div className="lightbox-tools">
            <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="Zoom out">
              <ZoomOut aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setZoom(1.25)} aria-label="Reset zoom">
              <RotateCcw aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setZoom((value) => Math.min(4, value + 0.25))} aria-label="Zoom in">
              <ZoomIn aria-hidden="true" />
            </button>
            <button type="button" onClick={onClose} aria-label="Close screenshot viewer" ref={closeRef}>
              <X aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          className="lightbox-stage"
          onWheel={(event) => {
            event.preventDefault();
            setZoom((value) => Math.min(4, Math.max(1, value + (event.deltaY < 0 ? 0.15 : -0.15))));
          }}
        >
          {screenshots.length > 1 && (
            <button type="button" onClick={onPrevious} aria-label="Previous screenshot">
              <ChevronLeft aria-hidden="true" />
            </button>
          )}
          <img
            className="lightbox-image"
            src={current.src}
            alt={current.alt}
            style={{ transform: `scale(${zoom})` }}
          />
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
