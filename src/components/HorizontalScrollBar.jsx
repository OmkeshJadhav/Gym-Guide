import React from "react";
import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="flex py-2 px-3 sm:w-screen">
      {data.map((item) => {
        return (
          <div
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            className="hidden md:hidden lg:flex flex-row my-10"
          >
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalScrollBar;
