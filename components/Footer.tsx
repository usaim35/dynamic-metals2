'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* About Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Dynemic Metals</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Leading manufacturer of premium garment accessories since 1999. Trusted by international brands and local manufacturers.
            </p>
            <p className="text-sm text-red-600 font-semibold">Pakistan | Karachi</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-red-600 transition">Home</a></li>
              <li><a href="/about" className="hover:text-red-600 transition">About Us</a></li>
              <li><a href="/why-choose-us" className="hover:text-red-600 transition">Why Choose Us</a></li>
              <li><a href="/certifications" className="hover:text-red-600 transition">Certifications</a></li>
              <li><a href="/contact" className="hover:text-red-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Certifications</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-red-600">✓</span> EN71 Part 3:1994
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">✓</span> EN1811 Nickel-Free
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">✓</span> OEKO-TEX Standard 100
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600">✓</span> LEAD-Free Manufacturing
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Email</p>
                <a href="mailto:usaimkhan24@gmail.com" className="text-red-600 hover:text-red-500 transition">
                  usaimkhan24@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400">WhatsApp</p>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition">
                  +92 300 123 4567
                </a>
              </div>
              <div>
                <p className="text-gray-400">Website</p>
                <a href="https://www.dynemicmetal.com" className="text-red-600 hover:text-red-500 transition">
                  www.dynemicmetal.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2024 Dynemic Metals. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-red-600 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}