'use client'

import React, { useState, useEffect } from 'react';

const images = [
  '/image_1.png', // Замените на пути к вашим изображениям
  '/image_2.png',
  '/image_3.png',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-[1280px] h-[720px] mx-auto overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between z-10">
        <button
          className="bg-opacity-50 hover:text-white-600 p-2"
          onClick={prevSlide}
        >
          &lt;-
        </button>
        <button
          className="bg-opacity-50 hover:text-white-600 p-2"
          onClick={nextSlide}
        >
          -&gt;
        </button>
      </div>
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[1280px] h-[720px] flex-shrink-0 transition-opacity duration-700 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-50'}`}
            style={{
              opacity: index === currentIndex ? 1 : 0.5,
              transform: index === currentIndex ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.7s, opacity 0.7s'
            }}
          >
            <img src={image} className="w-full h-full object-cover" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
