import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Getting Started - UI Academy Docs',
  description: 'How to get started using UI Academy components in your project.',
};

const GettingStarted = async () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-[oklch(65%_0.15_250)]">Getting Started</h1>
      <p className="mb-6 text-lg text-[oklch(40%_0_0)]">
        Follow these steps to start using UI Academy components in your project:
      </p>
      <ol className="list-decimal space-y-2 pl-6 text-base">
        <li>
          Install the UI Academy package:{' '}
          <code className="rounded bg-[oklch(97%_0_0)] px-2 py-1">npm install ui-academy</code>
        </li>
        <li>
          Import the component you need:{' '}
          <code className="rounded bg-[oklch(97%_0_0)] px-2 py-1">import &#123; Button &#125; from 'ui-academy'</code>
        </li>
        <li>Use the component in your app and customize with props.</li>
        <li>
          See the{' '}
          <a href="/components" className="text-[oklch(65%_0.15_250)] underline">
            Components
          </a>{' '}
          page for examples and code snippets.
        </li>
      </ol>
    </main>
  );
};

export default GettingStarted;
