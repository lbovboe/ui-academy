import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started - UI Academy Docs',
  description: 'How to get started using UI Academy components in your project.',
};

const GettingStarted = async () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-light-primary dark:text-dark-primary mb-4 text-3xl font-bold">Getting Started</h1>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 text-lg">
        Follow these steps to start using UI Academy components in your project:
      </p>
      <ol className="list-decimal space-y-2 pl-6 text-base">
        {/*  <div className="bg-light-background text-light-text-secondary dark:bg-dark-background dark:text-dark-text-secondary rounded p-4 text-sm">
      */}
        <li>
          Install the UI Academy package:{' '}
          <code className="bg-light-background text-light-text-secondary dark:bg-dark-background dark:text-dark-text-secondary rounded p-1 text-sm">npm install ui-academy</code>
        </li>
        <li>
          Import the component you need:{' '}
          <code className="bg-light-background text-light-text-secondary dark:bg-dark-background dark:text-dark-text-secondary rounded p-1 text-sm">import &#123; Button &#125; from 'ui-academy'</code>
        </li>
        <li>Use the component in your app and customize with props.</li>
        <li>
          See the{' '}
          <a href="/components" className="text-light-primary dark:text-dark-primary underline">
            Components
          </a>{' '}
          page for examples and code snippets.
        </li>
      </ol>
    </main>
  );
};

export default GettingStarted;
