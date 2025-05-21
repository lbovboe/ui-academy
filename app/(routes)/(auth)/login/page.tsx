import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account.',
};

const Login = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Login</h1>
      <form className="flex w-full max-w-xs flex-col gap-4">
        <input type="email" placeholder="Email" className="rounded border p-2" />
        <input type="password" placeholder="Password" className="rounded border p-2" />
        <button type="submit" className="rounded bg-[oklch(40%_0_0)] p-2 text-white">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
