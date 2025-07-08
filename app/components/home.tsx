'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';


export default function Hero() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/notes');
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-[80vh] flex items-center justify-center px-6">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 blur-sm" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          BCU Notes & Model Papers
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Free PDF resources for exams, updated model papers, and previous year questions.
        </p>
        <button
          onClick={handleStart}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-200"
        >
          View Notes <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
