'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/why-choose-us', label: 'Why Choose Us' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="text-red-600 font-bold text-2xl">DM</div>
          <div className="flex flex-col">
            <span className="text-red-600 font-bold text-lg leading-none">Dynemic</span>
            <span className="text-gray-800 font-semibold text-sm">Metals</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-red-600 font-medium transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/923170784004"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-red-600"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-red-600 font-medium transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923170784004"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition text-center mt-4"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}