import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet our team members.',
};

const Team = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Our Team</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">We are a group of passionate developers and designers.</p>
    </main>
  );
};

export default Team;
