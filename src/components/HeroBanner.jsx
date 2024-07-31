import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <div className="p-5 relative mt-[100px] ml-24 w-screen">
      <p className="text-[#FF2625] text-3xl font-extrabold my-4">
        Fitness Club
      </p>

      <h2 className="text-6xl font-extrabold my-6">
        Sweat, Smile <br /> And Repeat
      </h2>

      <p className="text-2xl leading-9 my-6">
        Checkout the most effective Exercises
      </p>
      <button
        type="button"
        class="text-white bg-gradient-to-r  from-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        <a href="#exercises" className="text-xl">
          Explore Execrcises
        </a>
      </button>

      <img src={HeroBannerImage} alt="banner" id="hero-banner-img" />
    </div>
  );
};

export default HeroBanner;
