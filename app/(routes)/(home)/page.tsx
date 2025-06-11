import type { Metadata } from 'next';
import HomeClient from '@/app/components/home/HomeClient';

export const metadata: Metadata = {
  title: 'UI-Academy',
  description:
    'Comprehensive documentation for reusable React components, hooks, and utilities built with TypeScript. Accelerate development with pre-built UI, context providers, hooks, and utilities.',
};

const Home = async () => {
  return <HomeClient />;
};

export default Home;