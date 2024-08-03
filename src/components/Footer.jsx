import React from "react";
import Logo from "../assets/images/Logo-1.png";
const bicepEmoji = "\u{1F4AA}";

const Footer = () => {
  return (
    <div className="mt-12 bg-[#FFF3F4] w-screen flex justify-center">
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center p-4 sm:px-6 sm:pt-6">
        <img
          src={Logo}
          alt="Logo"
          className="w-16 h-12 sm:w-20 sm:h-16 mb-4 sm:mb-0 sm:mr-4"
        />
        <p className="text-center sm:text-left">
          Made For Healthy Life {bicepEmoji}
        </p>
      </div>
    </div>
  );
};

export default Footer;
