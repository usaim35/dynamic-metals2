'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/why-choose-us', label: 'Why Choose Us' },
    { href: '/certifications', label: 'Certifications' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-red-600 font-bold text-lg">Dynemic</span>
            <span className="text-gray-800 font-semibold text-xs">Metals</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-red-600 font-medium transition duration-300 text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact Us Button */}
        <a
          href="/contact"
          className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold transition shadow-lg"
        >
          Contact Us
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
            href="/contact"
            className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition text-center mt-4"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}