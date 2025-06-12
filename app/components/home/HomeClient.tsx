'use client';

import Link from 'next/link';

const HomeClient = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 animate-pulse rounded-full bg-pink-500/20 blur-3xl delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const seed = i * 137.508; // Golden angle for better distribution
          const left = seed % 100;
          const top = (seed * 1.618) % 100;
          const delay = (i * 0.25) % 5;
          const duration = 3 + (i % 4);

          return (
            <div
              key={i}
              className="animate-float absolute h-2 w-2 rounded-full bg-white/10"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Hero section */}
        <div className="max-w-5xl space-y-8">
          {/* Title with gradient text */}
          <h1 className="text-6xl leading-tight font-black md:text-7xl lg:text-8xl">
            <span className="animate-gradient-x bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              React &nbsp;
            </span>
            <span className="animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent delay-300">
              Component
            </span>
            <br />
            <span className="animate-gradient-x bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent delay-700">
              Library
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 delay-1000 md:text-2xl">
            Accelerate your development with our comprehensive collection of
            <span className="font-semibold text-purple-400"> TypeScript-first</span> components, hooks, and utilities.
            Built for the modern web.
          </p>

          {/* Feature badges */}
          <div className="animate-fade-in-up mt-12 flex flex-wrap justify-center gap-4 delay-1500">
            {[
              { icon: '🎨', text: 'UI Components' },
              { icon: '🔗', text: 'Context Providers' },
              { icon: '🪝', text: 'Custom Hooks' },
              { icon: '⚡', text: 'Utilities' },
            ].map((feature, index) => (
              <div
                key={feature.text}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
                style={{ animationDelay: `${1500 + index * 200}ms` }}
              >
                <span className="text-2xl group-hover:animate-bounce">{feature.icon}</span>
                <span className="font-medium text-slate-200">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up mt-16 delay-2000">
            <Link
              href="/docs/"
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:from-purple-500 hover:to-blue-500 hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Get Started</span>
              <svg
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>

              {/* Button glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-75"></div>
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="animate-fade-in-up mt-20 delay-2500">
            <div className="flex items-center justify-center gap-4 text-slate-400">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-400"></div>
              <span className="text-sm font-medium">TypeScript • React • Next.js • Tailwind CSS</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default HomeClient;
