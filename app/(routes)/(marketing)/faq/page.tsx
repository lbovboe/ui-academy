import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently Asked Questions.',
};

const Faq = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
      <ul className="text-lg text-[oklch(40%_0_0)]">
        <li>
          Q: What is this site?
          <br />
          A: A Next.js 15 + React 19 template.
        </li>
        <li>
          Q: How do I use it?
          <br />
          A: Start by editing the pages in the app directory.
        </li>
      </ul>
    </main>
  );
};

export default Faq;
