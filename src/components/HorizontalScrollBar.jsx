import React from "react";
import BodyPart from "./BodyPart";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="flex py-2 px-3">
      {data.map((item) => {
        return (
          <div
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            className="my-10 flex flex-row"
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalScrollBar;
