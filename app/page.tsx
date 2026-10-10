'use client';

import { useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import RequestQuoteModal from '@/components/RequestQuoteModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const products = [
    { name: 'Snap Buttons', icon: '🔘', desc: 'Premium quality snap buttons' },
    { name: 'Eyelets', icon: '⭕', desc: 'Reinforced eyelets' },
    { name: 'Buckles', icon: '🔗', desc: 'Stylish functional buckles' },
    { name: 'Shank Buttons', icon: '🎯', desc: 'Custom shank buttons' },
    { name: 'Rivets', icon: '⚙️', desc: 'Heavy-duty rivets' },
    { name: 'Aluminum Nails', icon: '📌', desc: 'Lightweight aluminum nails' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      company: 'Fashion Brands Pakistan',
      text: 'Exceptional quality and reliability. Products meet international standards perfectly.',
      rating: 5
    },
    {
      name: 'Sarah Khan',
      company: 'Global Textiles Inc',
      text: 'Best supplier we have worked with. Professional team and timely delivery.',
      rating: 5
    },
    {
      name: 'Muhammad Rizwan',
      company: 'Karachi Exports',
      text: 'Outstanding customer service. Highly recommended for all accessory needs.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto w-full px-6 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-5xl font-bold text-red-600 mb-2">25+</div>
            <p className="text-gray-700 font-semibold text-lg">Years Experience</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-700 font-semibold text-lg">Happy Clients</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
            <p className="text-gray-700 font-semibold text-lg">Countries Served</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="text-5xl font-bold text-yellow-600 mb-2">6</div>
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
              onClick={() => setShowQuoteModal(true)}
            >
              <div className="text-6xl mb-6 group-hover:scale-125 transition">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition">{product.name}</h3>
              <p className="text-gray-600 text-lg mb-4">{product.desc}</p>
              <button className="text-red-600 hover:text-red-700 font-bold transition">
                Get Quote →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-red-600 mb-16 text-center">Why Choose Dynemic Metals?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assured</h3>
              <p className="text-gray-600 text-lg">International certifications ensure premium quality</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Global Reach</h3>
              <p className="text-gray-600 text-lg">Serving worldwide with reliable delivery</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600 text-lg">LEAD-Free sustainable manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto w-full px-6 py-20">
        <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white border-l-4 border-red-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl opacity-90 mb-8">Get premium garment accessories with guaranteed quality</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setShowQuoteModal(true)}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition transform hover:scale-105"
            >
              Get Quote
            </button>
            <a href="/contact" className="bg-white/20 hover:bg-white/30 border-2 border-white px-8 py-3 rounded-lg font-bold transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />

      {/* Quote Modal */}
      <RequestQuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </div>
  );
}