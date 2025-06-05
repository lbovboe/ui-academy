'use client';

import DocsWrapper from '@/app/components/docs/DocsWrapper';
import DocLayout from '@/app/components/docs/DocLayout';
import DocSection from '@/app/components/docs/DocSection';
import DocList from '@/app/components/docs/DocList';
import { useLanguage } from '@/app/components/docs/LanguageContext';
import { ComponentsContent, DocItem } from '@/app/(routes)/docs/components/page';

interface ComponentsClientProps {
  content: ComponentsContent;
}

export default function ComponentsClient({ content }: ComponentsClientProps) {
  const { language } = useLanguage();

  // Transform content based on selected language
  const localizedContent = {
    title: content.title[language],
    description: content.description[language],
    sections: {
      componentCategories: {
        title: content.sections.componentCategories.title[language],
        description: content.sections.componentCategories.description[language],
        items: content.sections.componentCategories.items[language],
      },
    },
  };

  return (
    <DocsWrapper>
      <DocLayout title={localizedContent.title} description={localizedContent.description}>
        <DocSection title={localizedContent.sections.componentCategories.title} delay={0}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {localizedContent.sections.componentCategories.description}
          </p>
          <DocList items={localizedContent.sections.componentCategories.items} />
        </DocSection>
      </DocLayout>
    </DocsWrapper>
  );
}
