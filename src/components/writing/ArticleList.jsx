import ArticleItem from './ArticleItem.jsx';

function ArticleList({ articles = [] }) {
  if (!articles.length) return <p className="text-secondary">Writing links will appear here soon.</p>;

  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <ArticleItem article={article} key={article.title} />
      ))}
    </div>
  );
}

export default ArticleList;
