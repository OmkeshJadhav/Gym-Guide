import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercise] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartData]);
    };

    fetchExercisesData();
  }, []);

  //Handling search
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions // For method and headers of API
      );

      //console.log(exerciseData);
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );

      setSearch(""); // emptied the search box
      exercises(searchedExercises);
    }
  };

  return (
    <div className="mt-9 p-5 w-screen">
      <p className="text-5xl mb-12 text-center">
        Awsome Exercises You <br /> Should Know
      </p>

      {/* Searchbox */}
      <div className="relative mb-18 flex justify-center">
        <input
          type="text"
          placeholder="Search Exercises"
          className="h-19 w-1/2 text-left text-xl border-none rounded-l-lg pl-4 p-3 outline-[#FF2625] bg-[#FF2625] bg-opacity-15 placeholder-slate-500"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <button
          className="bg-[#FF2625] p-3 w-40 rounded-r-lg text-xl text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchExercises;
