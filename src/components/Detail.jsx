import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  if (!exerciseDetail) return null;
  const { name, bodyPart, target, equipment, gifUrl } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-screen md:mx-12 lg:mx-20">
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* image and symbols */}
        <div className="w-full lg:w-1/2">
          <img
            src={gifUrl}
            alt={name}
            id="detail-image"
            loading="lazy"
            className="lg:w-full md:w-full md:h-full sm:h-full lg:h-full object-cover rounded-lg border-black border mb-6 lg:mb-0"
          />
        </div>

        {/* Description */}
        <div className="w-full lg:w-1/2 lg:ml-10">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-5 font-bold capitalize">
            {name}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {exerciseDetail.instructions.map((instruction, index) => (
              <li key={index} className="text-lg sm:text-xl">
                {instruction}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-around mt-6">
            {extraDetail?.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center mb-4"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-12 h-12 bg-[#fff2db] rounded-full p-1"
                  />
                </div>
                <p className="text-sm sm:text-base capitalize">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
