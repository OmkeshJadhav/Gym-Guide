import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // Data for Body Parts
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData(); //! Won't this be done automatically?
  }, []);

  //Handling search
  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=50",
          exerciseOptions
        );
        // console.log(exercisesData);

        const searchedExercises = exercisesData.filter(
          (item) =>
            item.name.toLowerCase().includes(search) ||
            item.target.toLowerCase().includes(search) ||
            item.equipment.toLowerCase().includes(search) ||
            item.bodyPart.toLowerCase().includes(search)
        );

        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

        setSearch("");
        setExercises(searchedExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    }
  };

  return (
    <div className="p-4 w-screen">
      <p className="text-5xl mb-12 text-center">
        Awesome Exercises You <br /> Should Know
      </p>

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
          className="bg-[#FF2625] p-3 lg:w-40 md:w-40 rounded-r-lg text-xl text-white sm:w-20 "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="p-5 w-full flex">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
