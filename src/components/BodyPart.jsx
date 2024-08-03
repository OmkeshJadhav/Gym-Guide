import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div
      id="bodyPart-card"
      className="flex flex-col items-center w-28 ml-2  hover:scale-110 transition-transform transform ease-in-out delay-100 duration-300 hover:border-t-2 hover:border-b-2 border-[#FF2625] cursor-pointer"
      onClick={() => {
        setBodyPart(item);
        window.scroll({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="flex justify-center flex-wrap">
        <img
          src={Icon}
          alt="gym"
          className="w-14 h-14 p-2 mx-6 transition-transform transform ease-in-out delay-100 duration-300"
        />
      </div>
      <div className="text-lg font-bold uppercase p-1 text-center">
        {item}
      </div>
    </div>
  );
};

export default BodyPart;
