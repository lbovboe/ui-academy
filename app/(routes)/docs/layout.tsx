'use client';

import { LanguageProvider } from '@/app/components/docs/LanguageContext';
import MotionConfig from '@/app/components/docs/MotionConfig';
import { Metadata } from 'next';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <MotionConfig>{children}</MotionConfig>
    </LanguageProvider>
  );
}
