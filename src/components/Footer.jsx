import { contact } from '../data/content';
import { LinkedInIcon, EmailIcon } from './ui/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          &copy; {currentYear} Anup Meshram. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
