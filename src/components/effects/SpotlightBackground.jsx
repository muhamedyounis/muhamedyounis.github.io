import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

function SpotlightBackground() {
  const overlayRef = useRef(null);
  const frameRef = useRef(0);
  const pointRef = useRef({ x: '50%', y: '18%' });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return undefined;

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover || reducedMotion) {
      overlay.style.setProperty('--mouse-x', '50%');
      overlay.style.setProperty('--mouse-y', '12%');
      return undefined;
    }

    const update = () => {
      overlay.style.setProperty('--mouse-x', `${pointRef.current.x}px`);
      overlay.style.setProperty('--mouse-y', `${pointRef.current.y}px`);
      frameRef.current = 0;
    };

    const onPointerMove = (event) => {
      pointRef.current = { x: event.clientX, y: event.clientY };
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [reducedMotion]);

  return <div ref={overlayRef} className="spotlight" aria-hidden="true" />;
}

export default SpotlightBackground;
