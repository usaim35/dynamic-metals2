'use client';

import Footer from '@/components/Footer';

export default function Certifications() {
  const certifications = [
    {
      name: 'EN71 Part 3:1994',
      category: 'Safety Standards',
      icon: '🔒',
      description: 'European standard for safety of toys and garment accessories',
      details: 'Ensures products are free from hazardous substances and meet safety requirements for children and users.',
      issued: '2010',
      scope: 'All metal accessories and buttons'
    },
    {
      name: 'EN1811',
      category: 'Nickel Release',
      icon: '🛡️',
      description: 'Standard for nickel release from products in direct and prolonged contact with skin',
      details: 'Guarantees that our products are nickel-free and safe for sensitive skin.',
      issued: '2012',
      scope: 'Snap buttons, eyelets, and buckles'
    },
    {
      name: 'OEKO-TEX Standard 100',
      category: 'Textile Safety',
      icon: '♻️',
      description: 'International certification for textiles free from harmful substances',
      details: 'Certifies that our metal accessories meet the highest standards for human ecology and environmental protection.',
      issued: '2015',
      scope: 'All garment accessories'
    },
    {
      name: 'LEAD-Free',
      category: 'Environmental',
      icon: '🌿',
      description: 'Products manufactured without lead content',
      details: 'Demonstrates our commitment to eco-friendly production and environmental sustainability.',
      issued: '2018',
      scope: 'All manufacturing processes'
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
            <span className="text-gray-900 font-semibold">Certifications</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold mb-4">Our Certifications</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">Commitment to Quality and International Standards | Verified by Third-Party Bodies</p>
          </div>
        </div>

        {/* Certifications List */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Internationally Recognized Certifications</h2>
          <div className="space-y-8">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-red-600 text-white p-8 flex items-center gap-6">
                  <span className="text-5xl">{cert.icon}</span>
                  <div>
                    <h2 className="text-4xl font-bold">{cert.name}</h2>
                    <p className="text-red-100 mt-1">{cert.category}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 text-lg mb-4 font-semibold">{cert.description}</p>
                  <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded mb-6">
                    <p className="text-gray-600"><strong>Details:</strong> {cert.details}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 font-semibold">Certification Year</p>
                      <p className="text-gray-800 text-lg">{cert.issued}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">Scope</p>
                      <p className="text-gray-800">{cert.scope}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why These Matter */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Why Certifications Matter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Quality Assurance</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  These certifications prove that our products meet stringent international quality and safety standards, ensuring reliability and performance for your business. Every product is tested against these specifications.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Customer Trust</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our certifications demonstrate our commitment to transparency and accountability in every aspect of our manufacturing process. Clients can trust that they're receiving verified, safe products.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Market Compliance</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We comply with regulations in major international markets, making our products suitable for global distribution. These certifications enable us to serve customers in Europe, North America, and Asia.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Environmental Care</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our eco-friendly certifications reflect our responsibility towards the environment and sustainable manufacturing practices. We believe in profitability without compromising the planet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Process */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Certification Process</h2>
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-gray-800 mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">Initial facility and process evaluation</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-gray-800 mb-2">Testing</h3>
                <p className="text-gray-600 text-sm">Comprehensive product testing</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-gray-800 mb-2">Audit</h3>
                <p className="text-gray-600 text-sm">Third-party verification audit</p>
              </div>
              <div className="text-center">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600 text-sm">Official certification awarded</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-red-600 text-white py-20 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4">Verified & Trusted</h2>
            <p className="text-lg opacity-90 mb-8">All our certifications are regularly audited and verified by third-party certification bodies</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
                Request Certificate Details
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-lg font-bold transition border-2 border-white">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}