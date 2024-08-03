import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  console.log(exercise);

  return (
    <Link
      to={`/exercise/${exercise.id}`}
      id="exercise-card"
      className="my-5 p-8 pt-0 hover:border-y-2 border-[#ff2625] hover:scale-105 transition-transform transform ease-in-out delay-100 duration-300 md:w-1/2 lg:w-1/3"
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="text-center m-2">
        <button className="ml-5 p-2 text-white bg-[#ffa9a9] text-xs rounded-lg uppercase">
          {exercise.bodyPart}
        </button>
        <button className="ml-5 p-2 text-white bg-[#ffcc75] text-xs rounded-lg uppercase">
          {exercise.target}
        </button>
      </div>
      <div className="ml-5 mt-3 pb-2 text-3xl font-bold capitalize text-center">
        {exercise.name.length > 25
          ? exercise.name.slice(0, 25) + "..."
          : exercise.name}
      </div>
    </Link>
  );
};

export default ExerciseCard;
