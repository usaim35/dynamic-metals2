'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: 'Premium Garment Accessories',
      subtitle: '25+ Years of Excellence',
      image: '/images/1.png'
    },
    {
      title: 'International Quality Standards',
      subtitle: 'EN71, EN1811, OEKO-TEX Certified',
      image: '/images/2.png'
    },
    {
      title: 'Global Reach, Local Expertise',
      subtitle: 'Serving 50+ Countries Worldwide',
      image: '/images/3.png'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-7xl font-bold mb-4">{slide.title}</h1>
              <p className="text-3xl opacity-90">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-125 transition"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-125 transition"
      >
        ❯
      </button>
    </div>
  );
}