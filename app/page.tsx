'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function Home() {
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    countries: 0,
    products: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        years: prev.years < 25 ? prev.years + 1 : 25,
        clients: prev.clients < 500 ? prev.clients + 10 : 500,
        countries: prev.countries < 50 ? prev.countries + 1 : 50,
        products: prev.products < 6 ? prev.products + 0.1 : 6
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { name: 'Snap Buttons', icon: '🔘', desc: 'Premium quality snap buttons for garments' },
    { name: 'Eyelets', icon: '⭕', desc: 'Reinforced eyelets for laces and cords' },
    { name: 'Buckles', icon: '🔗', desc: 'Stylish functional buckles for belts and bags' },
    { name: 'Shank Buttons', icon: '🎯', desc: 'Custom shank buttons for premium collections' },
    { name: 'Rivets', icon: '⚙️', desc: 'Heavy-duty rivets for jeans and workwear' },
    { name: 'Aluminum Nails', icon: '📌', desc: 'Lightweight aluminum nails for decoration' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      company: 'Fashion Brands Pakistan',
      text: 'Dynemic Metals provides exceptional quality and reliability. Their products meet international standards perfectly.',
      rating: 5
    },
    {
      name: 'Sarah Khan',
      company: 'Global Textiles Inc',
      text: 'The best supplier we have worked with. Professional team, quality products, and timely delivery every time.',
      rating: 5
    },
    {
      name: 'Muhammad Rizwan',
      company: 'Karachi Exports',
      text: 'Outstanding customer service and product quality. Highly recommended for all garment accessory needs.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-7xl font-bold mb-6 leading-tight">
                Premium Garment Accessories
              </h1>
              <p className="text-2xl opacity-90 mb-8">
                25+ Years of Excellence | Trusted by Global Brands
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
                  Get Quote
                </a>
                <a href="https://wa.me/923170784004" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition">
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <div className="z-10 relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏭</div>
                  <p className="text-xl font-semibold">Modern Manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
            <div className="text-5xl font-bold text-red-600 mb-2">{Math.floor(counts.years)}+</div>
            <p className="text-gray-700 font-semibold text-lg">Years Experience</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-5xl font-bold text-blue-600 mb-2">{counts.clients}+</div>
            <p className="text-gray-700 font-semibold text-lg">Happy Clients</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-5xl font-bold text-green-600 mb-2">{counts.countries}+</div>
            <p className="text-gray-700 font-semibold text-lg">Countries Served</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
            <div className="text-5xl font-bold text-yellow-600 mb-2">{Math.floor(counts.products)}</div>
            <p className="text-gray-700 font-semibold text-lg">Product Lines</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto w-full px-6 py-20">
        <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="group bg-white border-2 border-gray-200 hover:border-red-600 rounded-xl p-8 transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-6xl mb-6 group-hover:scale-125 transition">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition">{product.name}</h3>
              <p className="text-gray-600 text-lg">{product.desc}</p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a href="/contact" className="text-red-600 hover:text-red-700 font-bold transition">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">Why Choose Dynemic Metals?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assured</h3>
              <p className="text-gray-600">International certifications (EN71, EN1811, OEKO-TEX) ensure premium quality every time.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Reach</h3>
              <p className="text-gray-600">Serving 50+ countries with reliable delivery and consistent product standards.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6">💚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">LEAD-Free and sustainable manufacturing committed to environmental protection.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto w-full px-6 py-20">
        <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white border-l-4 border-red-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Internationally Certified</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <div className="text-5xl mb-4">🔒</div>
              <p className="font-bold mb-2">EN71 Part 3</p>
              <p className="text-gray-400 text-sm">Safety Standards</p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <div className="text-5xl mb-4">🛡️</div>
              <p className="font-bold mb-2">EN1811</p>
              <p className="text-gray-400 text-sm">Nickel-Free</p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <div className="text-5xl mb-4">♻️</div>
              <p className="font-bold mb-2">OEKO-TEX</p>
              <p className="text-gray-400 text-sm">Standard 100</p>
            </div>
            <div className="text-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <div className="text-5xl mb-4">🌿</div>
              <p className="font-bold mb-2">LEAD-Free</p>
              <p className="text-gray-400 text-sm">Eco-Friendly</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-2xl opacity-90 mb-8 max-w-2xl mx-auto">Get premium garment accessories with guaranteed quality and timely delivery</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Contact Us
            </a>
            <a href="https://wa.me/923170784004" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition">
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}