'use client';

import Footer from '@/components/Footer';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'First Local Manufacturer',
      description: 'Pioneers in snap button manufacturing in Pakistan since 1999',
      icon: '🏆',
      details: '25+ years of experience and innovation in the industry'
    },
    {
      title: 'Global Quality Standards',
      description: 'EN71 Part 3, EN1811 (Nickel-Free), OEKO-TEX Standard 100 certified',
      icon: '✓',
      details: 'International certifications ensuring product safety and quality'
    },
    {
      title: 'Eco-Friendly Production',
      description: 'LEAD-Free and environmentally sustainable manufacturing processes',
      icon: '🌱',
      details: 'Committed to environmental protection and sustainable practices'
    },
    {
      title: 'Diverse Product Range',
      description: 'Snap Buttons, Eyelets, Buckles, Shank Buttons, Rivets, Aluminum Nails',
      icon: '📦',
      details: 'Complete range of accessories for all garment types'
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Competitive pricing with superior craftsmanship and timely delivery',
      icon: '💰',
      details: 'Best value for money without compromising quality'
    },
    {
      title: 'International Partnerships',
      description: 'Collaborations with leading Chinese factories for advanced production',
      icon: '🌍',
      details: 'Global network ensuring reliable supply and quality standards'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-red-600 transition">Home</a>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Why Choose Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold mb-4">Why Choose Dynemic Metals?</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">Your Trusted Partner for Premium Garment Accessories | 25+ Years of Excellence</p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Key Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white border-l-4 border-red-600 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-base mb-4">{reason.description}</p>
                <p className="text-gray-500 text-sm italic">{reason.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quality Assurance</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Every product undergoes rigorous quality control processes. Our commitment to excellence is reflected in our internationally recognized certifications and consistent product standards.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span className="text-gray-700">100% inspection at production stage</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span className="text-gray-700">Advanced testing equipment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span className="text-gray-700">Certified quality managers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Customer Support</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We believe in building long-term relationships with our clients. Our dedicated support team is always available to assist with inquiries, custom orders, and technical specifications.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span className="text-gray-700">24/7 customer support</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span className="text-gray-700">Custom solutions available</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✓</span>
                    <span className="text-gray-700">Dedicated account managers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Internationally Certified</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Committed to the highest standards of quality and safety, verified by international certification bodies
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">🔒</div>
              <p className="font-bold text-gray-800 mb-2">EN71 Part 3:1994</p>
              <p className="text-sm text-gray-600">Safety Standards</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <p className="font-bold text-gray-800 mb-2">EN1811</p>
              <p className="text-sm text-gray-600">Nickel Release</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">♻️</div>
              <p className="font-bold text-gray-800 mb-2">OEKO-TEX</p>
              <p className="text-sm text-gray-600">Standard 100</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition text-center">
              <div className="text-4xl mb-4">🌿</div>
              <p className="font-bold text-gray-800 mb-2">LEAD-Free</p>
              <p className="text-sm text-gray-600">Eco-Friendly</p>
            </div>
          </div>
        </div>

        {/* Production Capacity */}
        <div className="bg-red-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Production Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-red-100">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100K+</div>
                <p className="text-red-100">Units Monthly</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-red-100">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Partner With Us?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">Contact us today to discuss your requirements and get a custom quote</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition">
              Contact Us Now
            </a>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-bold transition">
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}