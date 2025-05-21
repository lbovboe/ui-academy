import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about our company and mission.',
};

const About = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">About Us</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">
        We are dedicated to building great web experiences with Next.js 15 and React 19.
      </p>
    </main>
  );
};

export default About;
