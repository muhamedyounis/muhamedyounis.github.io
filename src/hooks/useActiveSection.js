import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    return sectionIds.includes(hash) ? hash : sectionIds[0];
  });

  useEffect(() => {
    if (!sectionIds.length) return undefined;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (!visible.size) return;
        const viewportTarget = window.innerHeight * 0.35;
        const closest = [...visible.entries()].sort(
          (a, b) => Math.abs(a[1] - viewportTarget) - Math.abs(b[1] - viewportTarget),
        )[0][0];
        setActiveSection((current) => (current === closest ? current : closest));
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0, 0.1, 0.35, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (sectionIds.includes(hash)) setActiveSection(hash);
    };
    window.addEventListener('hashchange', onHashChange);
    onHashChange();

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [sectionIds]);

  return activeSection;
}
