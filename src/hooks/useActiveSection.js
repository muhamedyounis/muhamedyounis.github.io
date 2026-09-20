import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    return sectionIds.includes(hash) ? hash : sectionIds[0];
  });

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const updateActiveSection = () => {
      const threshold = Math.min(window.innerHeight * 0.32, 280);
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.reduce((active, section) => {
        return section.getBoundingClientRect().top <= threshold ? section.id : active;
      }, sections[0]?.id);

      if (current) {
        setActiveSection((previous) => (previous === current ? previous : current));
      }
    };

    let frameId;
    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (sectionIds.includes(hash)) setActiveSection(hash);
      else updateActiveSection();
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [sectionIds]);

  return activeSection;
}
