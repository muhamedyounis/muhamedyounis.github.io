import ExternalLinkIcon from '../common/ExternalLinkIcon.jsx';
import ImageWithFallback from '../common/ImageWithFallback.jsx';

function ArticleItem({ article }) {
  return (
    <a className="article-item group" href={article.url}>
      <ImageWithFallback
        src={article.thumbnail}
        alt={`${article.title} thumbnail`}
        label={article.title}
        className="article-image"
        width="220"
        height="130"
      />
      <div>
        <p className="meta">{article.year}</p>
        <h3 className="group-title">
          {article.title}
          <ExternalLinkIcon />
        </h3>
        {article.description && <p className="mt-2 text-sm leading-relaxed text-secondary">{article.description}</p>}
      </div>
    </a>
  );
}

export default ArticleItem;
