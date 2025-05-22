import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "slide1",
      src: "https://i.ibb.co/qZbvYZ2/Pngtree-national-health-running-background-banner-1116722.png"
    },
    {
      id: "slide2",
      src: "https://i.ibb.co/B5Bh81Hk/Pngtree-small-fresh-fishing-background-banner-1126739.png"
    },
    {
      id: "slide3",
      src: "https://i.ibb.co/hq0pC5Y/Free-Wallpaper-Color-Halo-Background-Images-Color-Smudge-Brush-Paint-Sale-Banner-Photo-Background-PN.png"
    },
    {
      id: "slide4",
      src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    }
  ];

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-rotate slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full mt-6 border rounded-xl mx-auto md:h-[400px]">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          id={slide.id}
          className={`carousel-item relative w-full ${index !== currentSlide ? 'hidden' : ''}`}
        >
          <img
            src={slide.src}
            className="w-full"
            alt={`Slide ${index + 1}`}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={prevSlide} className="btn btn-circle">❮</button>
            <button onClick={nextSlide} className="btn btn-circle">❯</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;