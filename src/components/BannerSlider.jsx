import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "slide1",
      src: "https://i.ibb.co/qZbvYZ2/Pngtree-national-health-running-background-banner-1116722.png",
      text: "Stay Active. Stay Healthy.",
    },
    {
      id: "slide2",
      src: "https://i.ibb.co/B5Bh81Hk/Pngtree-small-fresh-fishing-background-banner-1126739.png",
      text: "Catch Moments, Not Just Fish.",
    },
    {
      id: "slide3",
      src: "https://i.ibb.co/hq0pC5Y/Free-Wallpaper-Color-Halo-Background-Images-Color-Smudge-Brush-Paint-Sale-Banner-Photo-Background-PN.png",
      text: "Express Yourself Through Art.",
    },
    {
      id: "slide4",
      src: "https://i.ibb.co/k2swXDgM/glenn-carstens-peters-0woy-PEJQ7jc-unsplash.jpg",
      text: "Join a Community of Creators.",
    },
  ];

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel w-full mt-20 md:h-[400px] rounded-lg mx-auto px-4 relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className={`carousel-item relative w-full ${
            index !== currentSlide ? "hidden" : ""
          }`}
        >
          <img
            src={slide.src}
            className="w-full h-full object-cover rounded-xl"
            alt={`Slide ${index + 1}`}
          />

          {/* Overlay text */}
          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center">
            <div className="text-left text-white px-6 md:px-12 max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md leading-snug">
                <Typewriter
                  words={[slide.text]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={0}
                  delaySpeed={1500}
                />
              </h2>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <button onClick={prevSlide} className="btn btn-circle bg-white/80 text-black hover:bg-white">
              ❮
            </button>
            <button onClick={nextSlide} className="btn btn-circle bg-white/80 text-black hover:bg-white">
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
