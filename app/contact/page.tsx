'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:sahilsheikh2990@gmail.com?subject=Quote Request from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0DMessage: ${formData.message}`;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-red-600 transition">Home</a>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Let's Connect</h1>
            <p className="text-xl opacity-90">Get Your Customized Quote Today | Fast Response Guaranteed</p>
          </div>
        </div>

        {/* Contact Info + Form + Map */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Info & Map */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              {/* Bhayani Center */}
              <div className="mb-10 bg-white border-l-4 border-red-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-red-600 mb-6">📍 Bhayani Center</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">ADDRESS</p>
                    <p className="text-gray-800 text-lg">North Nazimabad, Karachi, Pakistan</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">PHONE</p>
                    <a href="tel:+923170784004" className="text-red-600 hover:text-red-700 text-lg font-bold">
                      +92 317 078 4004
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">EMAIL</p>
                    <a href="mailto:sahilsheikh2990@gmail.com" className="text-red-600 hover:text-red-700 font-bold">
                      sahilsheikh2990@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">HOURS</p>
                    <p className="text-gray-800">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-800">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>

              {/* Al-Fiza Tower */}
              <div className="bg-white border-l-4 border-red-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-red-600 mb-6">📍 Al-Fiza Glass Tower</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">ADDRESS</p>
                    <p className="text-gray-800 text-lg">Gulshan-e-Iqbal, Karachi, Pakistan</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">PHONE</p>
                    <a href="tel:+923170784004" className="text-red-600 hover:text-red-700 text-lg font-bold">
                      +92 317 078 4004
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">EMAIL</p>
                    <a href="mailto:sahilsheikh2990@gmail.com" className="text-red-600 hover:text-red-700 font-bold">
                      sahilsheikh2990@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">HOURS</p>
                    <p className="text-gray-800">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-800">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-10 space-y-3">
                <a
                  href="https://wa.me/923170784004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-bold text-center transition transform hover:scale-105 shadow-lg"
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href="tel:+923170784004"
                  className="block bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-bold text-center transition transform hover:scale-105 shadow-lg"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:sahilsheikh2990@gmail.com"
                  className="block bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg font-bold text-center transition transform hover:scale-105 shadow-lg"
                >
                  📧 Send Email
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Send Us Message</h2>
              
              {submitted && (
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg mb-6">
                  <p className="text-green-700 font-bold">✓ Email sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <label className="block text-gray-800 font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                    placeholder="+92 300 123 4567"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 font-bold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                    style={{ height: '120px' }}
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
                >
                  Send Message →
                </button>
              </form>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-900 font-semibold">💡 Tip: For faster response, use WhatsApp or call us directly!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Visit Our Offices</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Bhayani Center Map */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.942852755651!2d67.04999!3d24.9504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5d7b5b5b5b%3A0x1234567890!2sBhayani%20Center%2C%20North%20Nazimabad%2C%20Karachi!5e0!3m2!1sen!2s!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bhayani Center"
                  style={{ border: 0 }}
                ></iframe>
                <div className="bg-white p-6">
                  <h3 className="font-bold text-lg text-gray-800">Bhayani Center</h3>
                  <p className="text-gray-600">North Nazimabad, Karachi</p>
                </div>
              </div>

              {/* Al-Fiza Tower Map */}
              <div className="rounded-xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5!2d67.1234!3d24.87654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x931d3bf3128d4630!2sAl-Fiza%20Glass%20Tower%2C%20Gulshan-e-Iqbal%2C%20Karachi!5e0!3m2!1sen!2s!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al-Fiza Glass Tower"
                  style={{ border: 0 }}
                ></iframe>
                <div className="bg-white p-6">
                  <h3 className="font-bold text-lg text-gray-800">Al-Fiza Glass Tower</h3>
                  <p className="text-gray-600">Gulshan-e-Iqbal, Karachi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Contact Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-red-600 mb-12 text-center">Why Get In Touch?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl text-center shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Fast Response</h3>
              <p className="text-gray-600">Reply within 24 hours</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center shadow-lg">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">25+ years experience</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored for your needs</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl text-center shadow-lg">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600">International certified</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}