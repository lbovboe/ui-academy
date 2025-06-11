import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'React Component Library Documentation',
  description:
    'Comprehensive documentation for reusable React components, hooks, and utilities built with TypeScript. Accelerate development with pre-built UI, context providers, hooks, and utilities.',
};

const Home = async () => {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <h1 className="text-light-primary dark:text-dark-primary mb-4 text-center text-5xl font-bold">
        React Component Library Documentation
      </h1>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8 max-w-2xl text-center text-lg">
        This documentation project serves as a comprehensive resource for reusable React components, hooks, and
        utilities built with TypeScript. The library is designed to accelerate development across multiple React
        projects by providing:
      </p>
      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-light-primary dark:text-dark-primary mb-2 text-2xl font-semibold">Core Features</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">UI Component Library</h3>
            <ul className="text-light-text-secondary dark:text-dark-text-secondary mt-1 list-inside list-disc space-y-1">
              <li>Pre-built, customizable React components styled with Tailwind CSS</li>
              <li>Consistent design patterns and responsive layouts</li>
              <li>Copy-paste ready code snippets with usage examples</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Context Providers</h3>
            <ul className="text-light-text-secondary dark:text-dark-text-secondary mt-1 list-inside list-disc space-y-1">
              <li>Ready-to-use React context providers for common application needs</li>
              <li>State management solutions that can be easily integrated into any React project</li>
              <li>Well-documented APIs with TypeScript interfaces</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Custom React Hooks</h3>
            <ul className="text-light-text-secondary dark:text-dark-text-secondary mt-1 list-inside list-disc space-y-1">
              <li>Reusable custom hooks for common React patterns and functionality</li>
              <li>State management, side effects, and component logic abstractions</li>
              <li>Well-documented with TypeScript interfaces and usage examples</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Utility Functions</h3>
            <ul className="text-light-text-secondary dark:text-dark-text-secondary mt-1 list-inside list-disc space-y-1">
              <li>Collection of pure JavaScript/TypeScript helper functions</li>
              <li>Common utilities like date formatting, debouncing, string manipulation, and data processing</li>
              <li>Cross-project compatible functions for everyday development tasks</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-light-primary dark:text-dark-primary mb-2 text-2xl font-semibold">Purpose</h2>
        <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg">
          This documentation aims to provide developers with:
        </p>
        <ul className="text-light-text-secondary dark:text-dark-text-secondary mt-2 list-inside list-disc space-y-1 text-lg">
          <li>Quick-reference code snippets</li>
          <li>Implementation examples and best practices</li>
          <li>Reusable patterns that maintain consistency across projects</li>
          <li>TypeScript-first approach for better code quality and developer productivity</li>
        </ul>
        <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2 text-lg">
          The goal is to create a centralized resource that reduces development time and promotes code reusability while
          maintaining high standards for type safety and component design.
        </p>
      </section>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/docs/"
          className="bg-light-primary hover:bg-light-secondary dark:bg-dark-primary dark:hover:bg-dark-secondary rounded px-6 py-2 font-semibold text-white shadow transition-colors"
        >
          Get Started
        </Link>
       
      </div>
    </main>
  );
};

export default Home;
