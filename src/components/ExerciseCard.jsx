import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      id="exercise-card"
      className="my-5 p-8 pt-0 hover:border-y-2 border-[#ff2625] hover:scale-105 transition-transform transform ease-in-out delay-100 duration-300"
    >
      <img src={exercise.gifUrl} alt="exercise.name" loading="lazy" />
      <div className="text-center m-2">
        <button className="ml-5 p-2 text-white bg-[#ffa9a9] text-xs rounded-lg uppercase">
          {exercise.bodyPart}
        </button>
        <button className="ml-5 p-2 text-white bg-[#ffcc75] text-xs rounded-lg uppercase">
          {exercise.target}
        </button>
      </div>
      <p className="ml-5 mt-3 pb-2 font-bold capitalize text-center">
        {exercise.name}
      </p>
    </Link>
  );
};

export default ExerciseCard;
