'use client';

import Link from 'next/link';

const HomeClient = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Hero section */}
        <div className="max-w-5xl space-y-8">
          {/* Title with gradient text */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              React
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x delay-300">
              Component
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x delay-700">
              Library
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-1000">
            Accelerate your development with our comprehensive collection of 
            <span className="text-purple-400 font-semibold"> TypeScript-first</span> components, 
            hooks, and utilities. Built for the modern web.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in-up delay-1500">
            {[
              { icon: "🎨", text: "UI Components" },
              { icon: "🔗", text: "Context Providers" }, 
              { icon: "🪝", text: "Custom Hooks" },
              { icon: "⚡", text: "Utilities" }
            ].map((feature, index) => (
              <div 
                key={feature.text}
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${1500 + index * 200}ms` }}
              >
                <span className="text-2xl group-hover:animate-bounce">{feature.icon}</span>
                <span className="text-slate-200 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 animate-fade-in-up delay-2000">
            <Link
              href="/docs/"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Get Started</span>
              <svg 
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="mt-20 animate-fade-in-up delay-2500">
            <div className="flex items-center justify-center gap-4 text-slate-400">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-400"></div>
              <span className="text-sm font-medium">TypeScript • React • Tailwind CSS</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
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
          0%, 100% {
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