'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">About Dynemic Metals</h1>
          <p className="text-xl opacity-90">Leading Garment Accessories Manufacturer in Pakistan Since 1999</p>
        </div>
      </div>

      {/* Company History */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Dynemic Metals was established in 1999 with the launch of our manufacturing plant in Karachi, Pakistan. As pioneers in the industry, we were proud to be the <strong>first company in Pakistan to manufacture snap buttons locally</strong>, setting a benchmark for innovation and quality in the garment accessory market.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Over the years, we have expanded our operations, integrating advanced manufacturing techniques and collaborating with leading Chinese factories to provide premium-quality buttons, buckles, rivets, eyelets, studs, and snap fasteners. Our ability to offer both local and international production allows us to cater to a diverse market, ensuring cost-effectiveness, superior craftsmanship, and timely delivery.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-600 mb-2">1999</div>
              <p className="text-gray-600 text-lg">Founded in Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Message */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">CEO's Message</h2>
          <div className="bg-white rounded-lg shadow-lg p-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At Dynemic Metals, we are committed to eco-friendly production, adhering to LEAD-Free, Nickel-Free, OEKO-TEX, and European EN71 standards to meet global compliance requirements. Our focus on continuous improvement, customer satisfaction, and technical innovation ensures that we remain a trusted partner for local garment manufacturers and international buyers sourcing from Pakistan.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              As we move forward, our goal remains clear—to deliver exceptional quality, reliability, and sustainable solutions to our valued clients. We thank you for your trust and look forward to strengthening our partnerships in the years to come.
            </p>
            <div className="border-t pt-6">
              <p className="text-red-600 font-bold text-lg">Muhammad Ali</p>
              <p className="text-gray-600">CEO, Dynemic Metals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Our Offices</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-red-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Bhayani Center</h3>
            <p className="text-gray-700 text-lg mb-2"><strong>Location:</strong> North Nazimabad, Karachi, Pakistan</p>
            <p className="text-gray-600">Manufacturing & Operations Center</p>
          </div>
          <div className="bg-white border-2 border-red-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Al-Fiza Glass Tower</h3>
            <p className="text-gray-700 text-lg mb-2"><strong>Location:</strong> Gulshan-e-Iqbal, Karachi, Pakistan</p>
            <p className="text-gray-600">Corporate & Sales Office</p>
          </div>
        </div>
      </div>
    </div>
  );
}