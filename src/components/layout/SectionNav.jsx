function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

function SectionNav({ items, activeSection, mobile = false }) {
  return (
    <nav className={mobile ? 'mobile-section-nav' : 'section-nav'} aria-label="Section navigation">
      <ul>
        {items.map((item) => {
          const active = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                className={active ? 'active' : ''}
                aria-current={active ? 'true' : undefined}
                onClick={() => scrollToSection(item.id)}
              >
                {!mobile && <span className="nav-line" aria-hidden="true" />}
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SectionNav;
