'use client';

import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-red-600 transition">Home</a>
            <span>/</span>
            <span className="text-gray-900 font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-6xl font-bold mb-4">About Dynemic Metals</h1>
            <p className="text-xl opacity-90 max-w-2xl">Leading Garment Accessories Manufacturer in Pakistan Since 1999 | Trusted by Global Brands</p>
          </div>
        </div>

        {/* Company History */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-5xl font-bold text-red-600 mb-8">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Dynemic Metals was established in 1999 with the launch of our manufacturing plant in Karachi, Pakistan. As pioneers in the industry, we were proud to be the <strong>first company in Pakistan to manufacture snap buttons locally</strong>, setting a benchmark for innovation and quality in the garment accessory market.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Over the years, we have expanded our operations, integrating advanced manufacturing techniques and collaborating with leading Chinese factories to provide premium-quality buttons, buckles, rivets, eyelets, studs, and snap fasteners.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our ability to offer both local and international production allows us to cater to a diverse market, ensuring cost-effectiveness, superior craftsmanship, and timely delivery to clients worldwide.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg h-96 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-8xl font-bold text-white mb-4">25+</div>
                <p className="text-red-100 text-xl">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-red-600 mb-16 text-center">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 font-bold text-lg">1999</div>
                <div className="bg-white p-8 rounded-lg shadow flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Establishment</h3>
                  <p className="text-gray-600">Founded manufacturing plant in Karachi. First company in Pakistan to locally manufacture snap buttons.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 font-bold text-lg">2005</div>
                <div className="bg-white p-8 rounded-lg shadow flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Expansion</h3>
                  <p className="text-gray-600">Expanded product range. Started collaborations with international manufacturers and Chinese factories.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 font-bold text-lg">2010</div>
                <div className="bg-white p-8 rounded-lg shadow flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Global Standards</h3>
                  <p className="text-gray-600">Achieved EN71, EN1811, and OEKO-TEX certifications. Started serving international markets.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 font-bold text-lg">2024</div>
                <div className="bg-white p-8 rounded-lg shadow flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Present</h3>
                  <p className="text-gray-600">Leading manufacturer serving 50+ countries. Trusted by major garment brands and retailers globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-red-600 mb-12 text-center">CEO's Message</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="bg-white border-l-4 border-red-600 p-12 rounded-lg shadow-lg">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "Since our establishment in 1999, Dynemic Metals has been at the forefront of metal garment accessory manufacturing in Pakistan. We take pride in being the first company in the country to locally manufacture snap buttons, setting a benchmark for innovation and quality in the industry."
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "At Dynemic Metals, we are committed to eco-friendly production, adhering to LEAD-Free, Nickel-Free, OEKO-TEX, and European EN71 standards to meet global compliance requirements. Our focus on continuous improvement, customer satisfaction, and technical innovation ensures that we remain a trusted partner for local garment manufacturers and international buyers sourcing from Pakistan."
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "As we move forward, our goal remains clear—to deliver exceptional quality, reliability, and sustainable solutions to our valued clients. We thank you for your trust and look forward to strengthening our partnerships in the years to come."
                </p>
              </div>
            </div>
            <div className="bg-red-600 text-white p-8 rounded-lg h-fit">
              <p className="text-2xl font-bold mb-2">Muhammad Ali</p>
              <p className="text-red-100 mb-6">CEO & Founder</p>
              <p className="text-sm text-red-100">25+ years experience in garment accessories manufacturing</p>
            </div>
          </div>
        </div>

        {/* Why We Started */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-red-600 mb-12 text-center">Why We Started</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a global leader in providing environmental-friendly, high-quality metal accessories. We are committed to meeting our customers' expectations in terms of quality, delivery, and cost through continuous improvement, innovative solutions, and strong customer partnerships.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To expand globally by offering a diverse range of premium buttons and accessories, supported by a reliable supply chain that ensures timely delivery. We aim to maintain consistent product quality while integrating innovation and sustainability to meet our clients' evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-bold text-red-600 mb-12 text-center">Our Offices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-red-600 rounded-lg p-10 shadow-lg hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-red-600 mb-6">Bhayani Center</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-semibold">Location:</p>
                  <p className="text-gray-800 text-lg">North Nazimabad, Karachi, Pakistan</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Department:</p>
                  <p className="text-gray-800">Manufacturing & Operations Center</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Functions:</p>
                  <ul className="text-gray-800 space-y-1 mt-2">
                    <li>• Production & Manufacturing</li>
                    <li>• Quality Control</li>
                    <li>• Inventory Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-red-600 rounded-lg p-10 shadow-lg hover:shadow-xl transition">
              <h3 className="text-3xl font-bold text-red-600 mb-6">Al-Fiza Glass Tower</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-semibold">Location:</p>
                  <p className="text-gray-800 text-lg">Gulshan-e-Iqbal, Karachi, Pakistan</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Department:</p>
                  <p className="text-gray-800">Corporate & Sales Office</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Functions:</p>
                  <ul className="text-gray-800 space-y-1 mt-2">
                    <li>• Sales & Marketing</li>
                    <li>• Customer Relations</li>
                    <li>• Administration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Overview */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-red-600 mb-12 text-center">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Snap Buttons</h3>
                <p className="text-gray-600">Premium quality snap buttons for garments, crafted with precision and durability.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Eyelets</h3>
                <p className="text-gray-600">Reinforced eyelets for laces, cords, and strings in various sizes and finishes.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Buckles</h3>
                <p className="text-gray-600">Stylish and functional buckles for belts, bags, and apparel applications.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Shank Buttons</h3>
                <p className="text-gray-600">Custom shank buttons with various designs for premium garment collections.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Rivets</h3>
                <p className="text-gray-600">Heavy-duty rivets for jeans, workwear, and industrial applications.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Aluminum Nails</h3>
                <p className="text-gray-600">Lightweight aluminum nails for decoration and fastening purposes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Contact us today to discuss your requirements and get a custom quote</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
                Contact Us
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-lg font-bold transition border-2 border-white">
                WhatsApp Now
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