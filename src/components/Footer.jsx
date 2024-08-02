import React from "react";
import Logo from "../assets/images/Logo-1.png";
const bicepEmoji = "\u{1F4AA}";

const Footer = () => {
  return (
    <div className="mt-20 bg-[#FFF3F4] w-screen flex justify-center">
      <div className="p-1 px-2 pt-6">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 h-16 relative left-10 mb-2"
        />
        <p>Made For Healthy Life {bicepEmoji}</p>
      </div>
    </div>
  );
};

export default Footer;
