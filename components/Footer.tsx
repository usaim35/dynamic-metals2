'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Dynamic Metals</h4>
            <p className="text-gray-400 text-sm">Premium metal accessories supplier trusted by leading fashion brands.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            {['About', 'Services', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-white transition-colors text-sm mb-2">
                {link}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            {['Snap Buttons', 'Eyelets', 'Buckles', 'Rivets'].map((prod) => (
              <a key={prod} href="#services" className="block text-gray-400 hover:text-white transition-colors text-sm mb-2">
                {prod}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-4">Certifications</h4>
            <p className="text-gray-400 text-sm mb-2">✓ EN71 Part 3:1994</p>
            <p className="text-gray-400 text-sm mb-2">✓ EN1811 Nickel-Free</p>
            <p className="text-gray-400 text-sm">✓ OEKO-TEX Standard 100</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
        <p>© {year} Dynamic Metals. All rights reserved. | Owner: Muhammad Ali</p>
      </div>
    </footer>
  );
}
