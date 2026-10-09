'use client';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Leading the Industry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">With over 15 years of excellence, we have earned trust from the world top fashion brands.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-4">To deliver world-class metal accessories that empower fashion designers and manufacturers to create lasting products. We combine precision engineering with sustainable practices.</p>
            <p className="text-gray-600 leading-relaxed">Our commitment to excellence has made us the preferred partner for global fashion brands seeking reliability and innovation.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[['200+', 'Product Variants'], ['20+', 'Active Clients'], ['15+', 'Years in Business'], ['4.9/5', 'Quality Rating']].map(([num, label], idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <p className="text-3xl font-bold text-red-600 mb-2">{num}</p>
                <p className="text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
