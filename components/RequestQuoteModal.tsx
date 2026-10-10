'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import React from 'react';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestQuoteModal({ isOpen, onClose }: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    productType: '',
    quantity: '',
    company: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:sahilsheikh2990@gmail.com?subject=Quote Request for ${formData.productType}&body=Product: ${formData.productType}%0DQuantity: ${formData.quantity}%0DCompany: ${formData.company}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}`;
    setFormData({ productType: '', quantity: '', company: '', email: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="bg-red-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Get Quote</h2>
          <button onClick={onClose} className="hover:scale-110 transition">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-gray-800 font-bold mb-2">Product Type *</label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
            >
              <option value="">Select Product</option>
              <option value="Snap Buttons">Snap Buttons</option>
              <option value="Eyelets">Eyelets</option>
              <option value="Buckles">Buckles</option>
              <option value="Shank Buttons">Shank Buttons</option>
              <option value="Rivets">Rivets</option>
              <option value="Aluminum Nails">Aluminum Nails</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-2">Quantity *</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              placeholder="e.g., 1000 pcs"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-2">Company Name *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-2">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
          >
            Send Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}