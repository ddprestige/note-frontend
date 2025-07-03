// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="space-x-4 text-sm">
          <a href="#" className="hover:text-gray-400">Privacy</a>
          <a href="#" className="hover:text-gray-400">Terms</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}
