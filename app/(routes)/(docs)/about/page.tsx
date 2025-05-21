import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - UI Academy Docs',
  description: 'Learn more about the UI Academy Docs project and its mission.',
};

const About = async () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-light-primary dark:text-dark-primary mb-4 text-3xl font-bold">About UI Academy Docs</h1>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 text-lg">
        UI Academy Docs is an open-source documentation site providing ready-to-use UI components, code snippets, and
        live demos. Our mission is to help developers build beautiful apps faster by offering high-quality,
        copy-paste-ready UI solutions.
      </p>
      <p className="text-light-text-secondary dark:text-dark-text-secondary text-base">
        Contribute on{' '}
        <a
          href="https://github.com/ui-academy/ui-academy-docs"
          className="text-light-primary dark:text-dark-primary underline"
        >
          GitHub
        </a>{' '}
        or give us feedback!
      </p>
    </main>
  );
};

export default About;
