'use client';

export default function Certifications() {
  const certifications = [
    {
      name: 'EN71 Part 3:1994',
      category: 'Safety Standards',
      description: 'European standard for safety of toys and garment accessories',
      details: 'Ensures products are free from hazardous substances and meet safety requirements for children and users.'
    },
    {
      name: 'EN1811',
      category: 'Nickel Release',
      description: 'Standard for nickel release from products in direct and prolonged contact with skin',
      details: 'Guarantees that our products are nickel-free and safe for sensitive skin.'
    },
    {
      name: 'OEKO-TEX Standard 100',
      category: 'Textile Safety',
      description: 'International certification for textiles free from harmful substances',
      details: 'Certifies that our metal accessories meet the highest standards for human ecology and environmental protection.'
    },
    {
      name: 'LEAD-Free',
      category: 'Environmental',
      description: 'Products manufactured without lead content',
      details: 'Demonstrates our commitment to eco-friendly production and environmental sustainability.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Certifications</h1>
          <p className="text-xl opacity-90">Commitment to Quality and International Standards</p>
        </div>
      </div>

      {/* Certifications List */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-red-600 text-white p-6">
                <h2 className="text-3xl font-bold">{cert.name}</h2>
                <p className="text-red-100 mt-2">{cert.category}</p>
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-lg mb-4">{cert.description}</p>
                <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded">
                  <p className="text-gray-600"><strong>Details:</strong> {cert.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why These Matter */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Why These Certifications Matter</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Quality Assurance</h3>
              <p className="text-gray-600 text-lg">These certifications prove that our products meet stringent international quality and safety standards, ensuring reliability for your business.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Customer Trust</h3>
              <p className="text-gray-600 text-lg">Our certifications demonstrate our commitment to transparency and accountability in every aspect of our manufacturing process.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Market Compliance</h3>
              <p className="text-gray-600 text-lg">We comply with regulations in major international markets, making our products suitable for global distribution.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">✓ Environmental Care</h3>
              <p className="text-gray-600 text-lg">Our eco-friendly certifications reflect our responsibility towards the environment and sustainable manufacturing practices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Verified & Trusted</h2>
        <p className="text-gray-600 text-lg mb-8">All our certifications are regularly audited and verified by third-party certification bodies.</p>
        <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">
          Request Certificate Details
        </a>
      </div>
    </div>
  );
}