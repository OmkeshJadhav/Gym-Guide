import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  console.log(exerciseDetail);
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

  // console.log(exerciseDetail);
  return (
    <div className="container ml-40 px-4 pr-40 w-screen">
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* <div className="lg:w-1/3 mb-8 lg:mb-0"> */}
        <img
          src={gifUrl}
          alt={name}
          id="detail-image"
          loading="lazy"
          className="w-2/3 h-2/3 object-cover rounded-lg border-black border"
        />
        {/* </div> */}
        <div className="lg:w-2/3 lg:pl-12 ml-20">
          <h3 className="text-3xl lg:text-5xl mb-5 font-bold capitalize">
            {name}
          </h3>
          <p className="text-lg lg:text-xl mb-6">
            Exercises keep you strong.{" "}
            <span className="capitalize">{name}</span> is one of the best
            exercises to target your {target}. It will help you improve
            your strength and gain energy.
          </p>
          <div className="space-y-6">
            {extraDetail?.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-16 h-16 bg-[#fff2db] rounded-full flex items-center justify-center mr-4">
                  <img
                    src={item.icon}
                    alt={item.bodyPart}
                    className="w-8 h-8"
                  />
                </div>
                <p className="text-lg lg:text-xl capitalize">
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
