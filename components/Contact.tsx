'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4">Ready to Partner?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
            {[
              { icon: MapPin, label: 'Office 1', text: 'Bhayani Center, North Nazimabad, Karachi' },
              { icon: MapPin, label: 'Office 2', text: 'Al-Fiza Glass Tower, Gulshan-e-Iqbal, Karachi' },
              { icon: Phone, label: 'Phone', text: '+92-XXX-XXXXXXX' },
              { icon: Mail, label: 'Email', text: 'info@dynemicmetal.com' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="mb-6 flex gap-4">
                  <Icon size={24} className="text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">{item.label}</p>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-black rounded-lg p-8 text-white">
            {submitted && <div className="mb-6 p-4 bg-green-600 rounded-lg">✓ Message received!</div>}
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'company', 'phone', 'subject'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  required={['name', 'email', 'subject'].includes(field)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                />
              ))}
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 resize-none"
              />
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
