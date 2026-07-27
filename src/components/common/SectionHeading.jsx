function SectionHeading({ children, subtle = false, id }) {
  return (
    <h2 id={id} className={subtle ? 'section-heading lg:sr-only' : 'section-heading'}>
      {children}
    </h2>
  );
}

export default SectionHeading;
