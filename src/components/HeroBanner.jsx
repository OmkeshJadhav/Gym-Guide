import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 z-10">
            <p className="text-[#FF2625] text-2xl sm:text-3xl font-extrabold mb-4">
              Fitness Club
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Sweat, Smile <br /> And Repeat
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6">
              Checkout the most effective Exercises
            </p>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-br hover:scale-105 transition-transform transform ease-in-out delay-100 duration-300 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              <a href="/" className="text-xl">
                Explore Exercises
              </a>
            </button>

            <p className="text-[#FF2625] lg:w-screen opacity-10 text-6xl sm:text-8xl lg:text-9xl mt-7 hidden lg:block">
              Gym Guide
            </p>
          </div>
          <div className="lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full flex justify-center lg:justify-end mt-10 lg:mt-0">
            <img
              src={HeroBannerImage}
              alt="banner"
              className="relative lg:-top-36 lg:h-[800px] lg:w-[700px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

// w-full lg:w-[700px] h-auto  object-cover 
