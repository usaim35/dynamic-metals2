'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderCount = 15;

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderCount);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setSliderIndex((prev) => (prev - 1 + sliderCount) % sliderCount);
  const handleNext = () => setSliderIndex((prev) => (prev + 1) % sliderCount);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-block mb-6">
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">Premium Metal Hardware</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Engineered for <span className="text-red-600">Excellence</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              Global supplier of premium metal accessories trusted by leading fashion brands worldwide. From snap buttons to rivets, we deliver quality with precision.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="btn-primary">Request Samples</a>
              <a href="#services" className="btn-outline">View Catalog</a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[['200+', 'Product Variants'], ['20+', 'Active Clients'], ['3', 'Continents']].map(([num, label], idx) => (
                <div key={idx}>
                  <p className="text-3xl font-bold text-red-600 mb-2">{num}</p>
                  <p className="text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex transition-transform duration-500" style={{ transform: `translateX(${sliderIndex * -100}%)` }}>
                {Array.from({ length: sliderCount }, (_, i) => (
                  <div key={i} className="min-w-full h-full relative">
                    <Image src={`/images/${i + 1}.png`} alt={`Product ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>

              <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 rounded-full transition-all">
                <ChevronLeft size={24} />
              </button>

              <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black p-2 rounded-full transition-all">
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {Array.from({ length: sliderCount }, (_, i) => (
                  <button key={i} onClick={() => setSliderIndex(i)} className={`transition-all rounded-full ${i === sliderIndex ? 'bg-white w-8 h-3' : 'bg-white/50 w-3 h-3'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
