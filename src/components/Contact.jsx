import { contact } from '../data/content';
import { Section, SectionTitle } from './ui/Section';
import Button from './ui/Button';
import { LinkedInIcon, EmailIcon } from './ui/Icons';

export default function Contact() {
  return (
    <Section id="contact">
      <div className="text-center">
        <SectionTitle centered>{contact.headline}</SectionTitle>
        <p className="text-text-secondary mb-10 max-w-md mx-auto -mt-8">
          {contact.context}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={contact.linkedin} external className="w-full sm:w-auto">
            <LinkedInIcon />
            LinkedIn
          </Button>
          <Button href={`mailto:${contact.email}`} variant="secondary" className="w-full sm:w-auto">
            <EmailIcon />
            Email
          </Button>
        </div>
      </div>
    </Section>
  );
}
