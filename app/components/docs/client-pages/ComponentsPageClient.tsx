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
      themeManagement: {
        title: content.sections.themeManagement.title[language],
        description: content.sections.themeManagement.description[language],
        items: content.sections.themeManagement.items[language],
      },
      headerComponents: {
        title: content.sections.headerComponents.title[language],
        description: content.sections.headerComponents.description[language],
      },
      bookComponents: {
        title: content.sections.bookComponents.title[language],
        description: content.sections.bookComponents.description[language],
        items: content.sections.bookComponents.items[language],
      },
      animationComponents: {
        title: content.sections.animationComponents.title[language],
        description: content.sections.animationComponents.description[language],
      },
      toolsComponents: {
        title: content.sections.toolsComponents.title[language],
        description: content.sections.toolsComponents.description[language],
        items: content.sections.toolsComponents.items[language],
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

        <DocSection title={localizedContent.sections.themeManagement.title} delay={1}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {localizedContent.sections.themeManagement.description}
          </p>
          <DocList items={localizedContent.sections.themeManagement.items} />
        </DocSection>

        <DocSection title={localizedContent.sections.headerComponents.title} delay={2}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {localizedContent.sections.headerComponents.description}
          </p>
        </DocSection>

        <DocSection title={localizedContent.sections.bookComponents.title} delay={3}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {localizedContent.sections.bookComponents.description}
          </p>
          <DocList items={localizedContent.sections.bookComponents.items} />
        </DocSection>

        <DocSection title={localizedContent.sections.animationComponents.title} delay={4}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {localizedContent.sections.animationComponents.description}
          </p>
        </DocSection>

        <DocSection title={localizedContent.sections.toolsComponents.title} delay={5}>
          <p className="text-doc_text-secondary_light dark:text-doc_text-secondary_dark mb-4">
            {localizedContent.sections.toolsComponents.description}
          </p>
          <DocList items={localizedContent.sections.toolsComponents.items} />
        </DocSection>
      </DocLayout>
    </DocsWrapper>
  );
}