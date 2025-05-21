import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog - UI Academy Docs',
  description: 'Release notes and updates for UI Academy components.',
};

const Changelog = async () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-light-primary dark:text-dark-primary mb-4 text-3xl font-bold">Changelog</h1>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 text-lg">
        Stay up to date with the latest changes and improvements to UI Academy components.
      </p>
      <div className="bg-light-background text-light-text-secondary dark:bg-dark-background dark:text-dark-text-secondary rounded p-4 text-sm">
        <p>v1.0.0 - Initial release 🎉</p>
        {/* Add more release notes here */}
      </div>
    </main>
  );
};

export default Changelog;
