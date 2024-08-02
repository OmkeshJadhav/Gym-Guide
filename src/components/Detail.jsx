import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  // console.log(exerciseDetail);
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
    <div className="container ml-32 px-4 pr-36 w-screen">
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* image and symbols */}
        <div className="w-full">
          <img
            src={gifUrl}
            alt={name}
            id="detail-image"
            loading="lazy"
            className="w-full h-5/6 object-cover rounded-lg border-black border "
          />
        </div>

        {/* Description */}
        <div className="lg:w-2/3 ml-10">
          <h3 className="text-3xl lg:text-5xl mb-5 font-bold capitalize">
            {name}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {exerciseDetail.instructions.map((instruction, index) => (
              <li key={index} className="text-lg">
                {instruction}
              </li>
            ))}
          </ul>
          <div className="flex justify-around">
            {extraDetail?.map((item) => (
              <div key={item.name}>
                <div className="w-12 h-12 mr-2 mt-4 flex items-center justify-center ">
                  <img
                    src={item.icon}
                    alt={item.bodyPart}
                    className="w-12 h-12 bg-[#fff2db] rounded-full p-1"
                  />
                  <p className="text-sm capitalize m-2">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
