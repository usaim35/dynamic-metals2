'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'First Local Manufacturer',
      description: 'Pioneers in snap button manufacturing in Pakistan since 1999',
      icon: '🏆'
    },
    {
      title: 'Global Quality Standards',
      description: 'EN71 Part 3, EN1811 (Nickel-Free), OEKO-TEX Standard 100 certified',
      icon: '✓'
    },
    {
      title: 'Eco-Friendly Production',
      description: 'LEAD-Free and environmentally sustainable manufacturing processes',
      icon: '🌱'
    },
    {
      title: 'Diverse Product Range',
      description: 'Snap Buttons, Eyelets, Buckles, Shank Buttons, Rivets, Aluminum Nails',
      icon: '📦'
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Competitive pricing with superior craftsmanship and timely delivery',
      icon: '💰'
    },
    {
      title: 'International Partnerships',
      description: 'Collaborations with leading Chinese factories for advanced production',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Why Choose Dynemic Metals?</h1>
          <p className="text-xl opacity-90">Your Trusted Partner for Premium Garment Accessories</p>
        </div>
      </div>

      {/* Reasons Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white border-l-4 border-red-600 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Internationally Certified</h2>
          <p className="text-gray-600 text-lg mb-12">Committed to the highest standards of quality and safety</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800">EN71 Part 3:1994</p>
              <p className="text-sm text-gray-600 mt-2">Safety Standards</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800">EN1811</p>
              <p className="text-sm text-gray-600 mt-2">Nickel Release</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800">OEKO-TEX</p>
              <p className="text-sm text-gray-600 mt-2">Standard 100</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="font-bold text-gray-800">LEAD-Free</p>
              <p className="text-sm text-gray-600 mt-2">Eco-Friendly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Partner With Us?</h2>
        <p className="text-gray-600 text-lg mb-8">Contact us today to discuss your requirements and get a custom quote.</p>
        <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
          Contact Us Now
        </a>
      </div>
    </div>
  );
}