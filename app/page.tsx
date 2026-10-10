'use client';

import Footer from '@/components/Footer';

export default function Home() {
  const products = [
    { name: 'Snap Buttons', icon: '🔘' },
    { name: 'Eyelets', icon: '⭕' },
    { name: 'Buckles', icon: '🔗' },
    { name: 'Shank Buttons', icon: '🎯' },
    { name: 'Rivets', icon: '⚙️' },
    { name: 'Aluminum Nails', icon: '📌' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Premium Garment Accessories</h1>
              <p className="text-xl opacity-90 mb-8">
                25+ Years of Excellence | Trusted by Global Brands
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
                  Get Quote
                </a>
                <a href="https://wa.me/923170784004" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 border-2 border-white px-8 py-3 rounded-lg font-bold transition">
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
            <p className="text-gray-700 font-semibold">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
            <p className="text-gray-700 font-semibold">Happy Clients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <p className="text-gray-700 font-semibold">Countries Served</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600 mb-2">6</div>
            <p className="text-gray-700 font-semibold">Product Lines</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 hover:border-red-600 rounded-lg p-8 text-center transition hover:shadow-lg">
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Why Choose Dynemic Metals?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assured</h3>
              <p className="text-gray-600">International certifications (EN71, EN1811, OEKO-TEX)</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Reach</h3>
              <p className="text-gray-600">Serving 50+ countries with reliable delivery</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">LEAD-Free and sustainable manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
              Contact Us
            </a>
            <a href="https://wa.me/923170784004" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 border-2 border-white px-8 py-3 rounded-lg font-bold transition">
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}