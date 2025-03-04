import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);
    console.log(interval); // 5 seconds interval
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-[400px] overflow-hidden ">
      {/* Slide Container */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* First Slide */}
        <div className="w-full flex-shrink-0 flex items-center bg-black">
          {/* Left Half (Text on top of Image) */}
          <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 relative">
            {/* Text content on top */}
            <div className="text-[#414141] relative z-10">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-white"></p>
                <p className="font-medium text-sm md:text-space text-white">
                  OUR BESTSELLER
                </p>
              </div>
              <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular text-white">
                Latest Arrivals
              </h1>
              <div className="flex items-center gap-2">
                <button className="font-semibold text-sm md:text-base text-black bg-white rounded py-3 px-2">
                  SHOP NOW
                </button>
                <p className="w-8 md:w-11 h-[2px] bg-white"></p>
              </div>
            </div>
          </div>

          {/* Right Half (Image) */}
          <div className="w-3/4 h-full">
            <img
              src={assets.cloth}
              alt="Slide 3"
              className="w-full h-fit object-cover"
            />
          </div>
        </div>

        {/* seccond most slide */}
        <div className="w-full flex-shrink-0 flex items-center bg-black">
          {/* Left Half (Text on top of Image) */}
          <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 relative">
            {/* Text content on top */}
            <div className="text-[#414141] relative z-10">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-white"></p>
                <p className="font-medium text-sm md:text-space text-white">
                  Unlimited Possibilities
                </p>
              </div>
              <h1 className="text-3xl sm:py-3 lg:text-3xl leading-relaxed prata-regular text-white">
                Designs for every personality <br /> and taste.
              </h1>
              <div className="flex items-center gap-2">
                <button className=" text-sm md:text-base text-black bg-white rounded py-3 px-4">
                  Customize Now
                </button>
                <p className="w-8 md:w-11 h-[2px] bg-white"></p>
              </div>
            </div>
          </div>

          {/* Right Half (Image) */}
          <div className="w-3/4 h-full">
            <img
              src={assets.cloth2}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Slide */}
        <div className="w-full flex-shrink-0 flex items-center bg-black">
          {/* Left Half (Text) */}
          <div className="w-1/2 px-8 text-white text-center sm:text-left">
            <h2 className="text-4xl font-semibold mb-4">
              Unlimited Possibilities
            </h2>
            <p className="text-lg">Designs for every personality and taste.</p>
          </div>

          {/* Right Half (Image) */}
          <div className="w-1/2 h-full">
            <img
              src={assets.cloth3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Third Slide */}
        <div className="w-full flex-shrink-0 flex items-center bg-black">
          {/* Left Half (Text) */}
          <div className="w-1/2 px-8 text-white text-center sm:text-left">
            <h2 className="text-4xl font-semibold mb-4">
              Unlimited Possibilities
            </h2>
            <p className="text-lg">Designs for every personality and taste.</p>
          </div>

          {/* Right Half (Image) */}
          <div className="w-1/2 h-full">
            <img
              src={assets.cloth}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Dots for Slide Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <button
          className={`w-2 h-2 rounded-full ${
            currentSlide === 0 ? "bg-white" : "bg-gray-400"
          } transition-all`}
          onClick={() => setCurrentSlide(0)}
        />
        <button
          className={`w-2 h-2 rounded-full ${
            currentSlide === 1 ? "bg-white" : "bg-gray-400"
          } transition-all`}
          onClick={() => setCurrentSlide(1)}
        />
        <button
          className={`w-2 h-2 rounded-full ${
            currentSlide === 2 ? "bg-white" : "bg-gray-400"
          } transition-all`}
          onClick={() => setCurrentSlide(2)}
        />
      </div>
    </section>
  );
};

export default Hero;
