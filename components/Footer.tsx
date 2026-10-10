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
                <a href="mailto:sahilsheikh2990@gmail.com" className="text-red-600 hover:text-red-500 transition">
                  sahilsheikh2990@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400">WhatsApp</p>
                <a href="https://wa.me/923170784004" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition">
                  +92 317 078 4004
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

        {/* Contact Icons */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <a
            href="https://wa.me/923170784004"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full transition transform hover:scale-110 shadow-lg"
            title="WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.425 0-2.809.356-4.038 1.03-.191.087-.374.176-.557.269l-3.657-.96.928 3.26c-.044.163-.087.324-.129.485-.726 2.511-.212 4.75 1.533 6.062 1.534 1.13 3.899 1.106 5.472.104 1.574-1.003 2.677-2.6 2.677-4.392 0-1.537-.639-2.985-1.75-4.073-1.111-1.088-2.574-1.685-4.145-1.685m7.446-3.79c-.997-1.003-2.306-1.759-3.758-2.206-1.452-.447-2.989-.676-4.545-.676-3.607 0-6.967 1.467-9.37 3.832-2.402 2.364-3.752 5.644-3.752 9.276 0 1.517.261 3.002.762 4.412L.05 23.928l4.816-1.289c1.341.757 2.876 1.155 4.466 1.155 3.607 0 6.967-1.467 9.37-3.832 2.402-2.364 3.752-5.644 3.752-9.276 0-2.464-.631-4.833-1.829-6.933"/>
            </svg>
          </a>
          <a
            href="mailto:sahilsheikh2990@gmail.com"
            className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition transform hover:scale-110 shadow-lg"
            title="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

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