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
      <h1 className="text-light-primary dark:text-dark-primary mb-4 text-center text-5xl font-bold">
        React Component Library Documentation
      </h1>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl text-center text-lg">
        This documentation site is your comprehensive resource for reusable React components and utilities built with
        TypeScript. Accelerate development across multiple projects with pre-built UI components, ready-to-use context
        providers, and cross-project utility functions—all styled with Tailwind CSS and designed for consistency,
        reusability, and type safety.
      </p>
      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-light-primary dark:text-dark-primary mb-2 text-2xl font-semibold">Core Features</h2>
        <ul className="text-light-text-secondary dark:text-dark-text-secondary list-inside list-disc space-y-2 text-lg">
          <li>
            <span className="font-semibold">UI Component Library:</span> Pre-built, customizable React components with
            consistent design patterns and responsive layouts. Copy-paste ready code snippets and usage examples.
          </li>
          <li>
            <span className="font-semibold">Context Providers:</span> Ready-to-use React context providers for common
            application needs, with well-documented APIs and TypeScript interfaces.
          </li>
          <li>
            <span className="font-semibold">Utility Functions:</span> Helper functions and custom hooks, fully typed and
            compatible across projects for common development tasks.
          </li>
        </ul>
      </section>
      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-light-primary dark:text-dark-primary mb-2 text-2xl font-semibold">Purpose</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">
          This documentation aims to provide developers with:
        </p>
        <ul className="text-light-text-secondary dark:text-dark-text-secondary mt-2 list-inside list-disc space-y-1 text-lg">
          <li>Quick-reference code snippets</li>
          <li>Implementation examples and best practices</li>
          <li>Reusable patterns for consistency across projects</li>
          <li>TypeScript-first approach for better code quality and productivity</li>
        </ul>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2 text-lg">
          The goal is to reduce development time and promote code reusability while maintaining high standards for type
          safety and component design.
        </p>
      </section>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/docs/getting-started"
          className="bg-light-primary hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary rounded px-6 py-2 font-semibold text-white shadow transition-colors"
        >
          Get Started
        </Link>
        <Link
          href="/components"
          className="border-light-primary text-light-primary hover:bg-light-background dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-background rounded border px-6 py-2 font-semibold transition-colors"
        >
          Browse Components
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
