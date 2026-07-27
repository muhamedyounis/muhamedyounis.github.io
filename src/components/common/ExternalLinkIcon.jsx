import { ArrowUpRight } from 'lucide-react';

function ExternalLinkIcon({ className = '' }) {
  return <ArrowUpRight className={`inline-icon ${className}`} aria-hidden="true" />;
}

export default ExternalLinkIcon;
