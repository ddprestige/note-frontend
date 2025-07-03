'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/notes'); 
  };

  return (
    <section className="bg-gray-100 min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Take Notes Effortlessly
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          A simple and intuitive notes app to organize your thoughts, tasks, and ideas — anywhere, anytime.
        </p>
        <button
          onClick={handleStart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200"
        >
          Start Taking Notes
        </button>
      </div>
    </section>
  );
}
