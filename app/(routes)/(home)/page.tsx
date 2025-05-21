import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the homepage.',
};

const Home = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg text-[oklch(40%_0_0)]">This is your starting point.</p>
    </main>
  );
};

export default Home;
