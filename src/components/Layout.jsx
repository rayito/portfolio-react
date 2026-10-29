import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // To close menu on route change

  React.useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page change
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <header className="fixed top-0 w-full bg-[#fafafa]/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl tracking-tight">
            <span className="font-bold">edenhernandez</span>
            <span className="font-light text-gray-500">design</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/cv" className="hover:text-blue-600 transition-colors">My CV</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-600 hover:text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
            <Link to="/cv" className="text-lg font-medium hover:text-blue-600">My CV</Link>
            <Link to="/about" className="text-lg font-medium hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-lg font-medium hover:text-blue-600">Contact</Link>
          </nav>
        )}
      </header>

      {/* Main Content Injection Area */}
      <main className="flex-grow max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Edén Hernández. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/rayito" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors">GitHub</a>
            <a href="#linkedin" className="text-gray-400 hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}