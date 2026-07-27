import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SpotlightBackground from './components/effects/SpotlightBackground.jsx';
import SkipLink from './components/common/SkipLink.jsx';
import ScrollManager from './components/layout/ScrollManager.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProjectArchivePage = lazy(() => import('./pages/ProjectArchivePage.jsx'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

function App() {
  const location = useLocation();

  return (
    <>
      <SkipLink />
      <SpotlightBackground />
      <ScrollManager pathname={location.pathname} hash={location.hash} />
      <Suspense fallback={<main className="page-shell py-24 text-slate-300">Loading...</main>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectArchivePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
