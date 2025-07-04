"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide images - replace these with your actual images
  const slides = [
    {
      src: "/Broadcast.png", // Replace with your image path
      alt: "Slide 1 - Business banner",
    },
    {
      src: "/Broadcast.png", // Replace with your image path
      alt: "Slide 2 - Technology banner",
    },
    {
      src: "/Broadcast.png", // Replace with your image path
      alt: "Slide 3 - Marketing banner",
    },
    {
      src: "/Broadcast.png", // Replace with your image path
      alt: "Slide 4 - Innovation banner",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex justify-center items-center pt-9 px-4 mx-3 sm:mx-5 md:mx-8 relative">
      <div className="relative w-[95%] h-[340px] overflow-hidden rounded-lg shadow-lg">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - REMOVED */}

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-blue-500 scale-110 shadow-lg"
                  : "bg-white bg-opacity-60 hover:bg-opacity-90"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
