function TagList({ tags = [], className = '' }) {
  if (!tags.length) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technologies">
      {tags.map((tag) => (
        <li className="tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
