import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'UI Academy Docs',
  description:
    'Documentation, code snippets, and live demos for UI Academy components. Copy and use UI code instantly in your projects.',
};

const Home = async () => {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <h1 className="text-light-primary dark:text-dark-primary mb-4 text-5xl font-bold">UI Academy Docs</h1>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-xl text-center text-lg">
        Explore ready-to-use UI components, copy code snippets, and see live demos. Build beautiful apps faster with UI
        Academy.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/docs/getting-started"
          className="bg-light-primary hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary rounded px-6 py-2 font-semibold text-white shadow transition-colors"
        >
          Getting Started
        </Link>
        <Link
          href="/components"
          className="border-light-primary text-light-primary hover:bg-light-background dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-background rounded border px-6 py-2 font-semibold transition-colors"
        >
          Components
        </Link>
        <Link
          href="/docs/changelog"
          className="border-light-primary text-light-primary hover:bg-light-background dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-background rounded border px-6 py-2 font-semibold transition-colors"
        >
          Changelog
        </Link>
        <Link
          href="/docs/about"
          className="border-light-primary text-light-primary hover:bg-light-background dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-background rounded border px-6 py-2 font-semibold transition-colors"
        >
          About
        </Link>
      </div>
    </main>
  );
};

export default Home;
