import { useEffect } from 'react';
import { profile } from '../../data/profile.js';

function PageTitle({ title }) {
  useEffect(() => {
    document.title = title ? `${title} - ${profile.name}` : `${profile.name} - ${profile.role}`;
  }, [title]);

  return null;
}

export default PageTitle;
