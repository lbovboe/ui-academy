'use client';

import { FaBook, FaTools, FaCogs, FaCode } from 'react-icons/fa';
import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocFeatureCard from '@/app/components/docs/DocFeatureCard';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import { IconType } from 'react-icons';

// Type definitions
interface SectionData {
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  href: string;
  icon: string;
}

interface PageContent {
  en: {
    title: string;
    description: string;
    keyFeatures: string;
    docSections: string;
  };
  zh: {
    title: string;
    description: string;
    keyFeatures: string;
    docSections: string;
  };
}

interface DocsPageClientProps {
  sections: SectionData[];
  pageContent: PageContent;
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, IconType> = {
  FaBook,
  FaTools,
  FaCogs,
  FaCode,
};

// Client Component
export default function DocsPageClient({ sections, pageContent }: DocsPageClientProps) {
  const { language } = useLanguage();

  // Get content based on selected language
  const content = pageContent[language as keyof PageContent];

  return (
    <DocsWrapper>
      <DocLayout title={content.title} description={content.description} showBackLink={false}>
        <h2
          id="documentation-sections"
          className="text-doc_text-heading_light dark:text-doc_text-heading_dark mb-6 text-2xl font-bold"
        >
          {content.docSections}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <DocFeatureCard
              key={section.title[language as keyof typeof section.title]}
              title={section.title[language as keyof typeof section.title]}
              description={section.description[language as keyof typeof section.description]}
              href={section.href}
              icon={iconMap[section.icon]}
              delay={index}
            />
          ))}
        </div>
      </DocLayout>
    </DocsWrapper>
  );
}