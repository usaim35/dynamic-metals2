'use client';

export default function Services() {
  const services = [
    { name: 'Snap Buttons', specs: ['Multiple finishes', 'Various sizes', 'High durability'] },
    { name: 'Eyelets', specs: ['Precision stamped', 'Various diameters', 'Lead-free'] },
    { name: 'Buckles', specs: ['Multiple styles', 'High strength', 'Custom sizes'] },
    { name: 'Shank Buttons', specs: ['High pull-strength', 'Various sizes', 'Custom designs'] },
    { name: 'Rivets', specs: ['Copper grade', 'Brass grade', 'High strength'] },
    { name: 'Aluminum Nails', specs: ['Lightweight', 'High strength', 'Eco-friendly'] },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">What We Offer</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-4">{service.name}</h3>
              <ul className="space-y-2">
                {service.specs.map((spec, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-red-600">✓</span> {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
