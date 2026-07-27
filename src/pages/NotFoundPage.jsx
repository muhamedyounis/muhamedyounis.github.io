import { Link } from 'react-router-dom';
import PageTitle from '../components/layout/PageTitle.jsx';

function NotFoundPage() {
  return (
    <>
      <PageTitle title="Page Not Found" />
      <main id="main-content" className="page-shell not-found">
        <p className="meta">404</p>
        <h1>Page not found.</h1>
        <p className="text-secondary">The page you requested does not exist or has moved.</p>
        <Link to="/" className="primary-link">
          Return home
        </Link>
      </main>
    </>
  );
}

export default NotFoundPage;
