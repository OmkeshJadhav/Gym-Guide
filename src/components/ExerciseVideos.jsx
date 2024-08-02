import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // console.log(exerciseVideos);
  return (
    <div className="w-screen">
      <p className="text-3xl capitalize mt-20 ml-20 font-bold">
        Watch How To Do{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise
      </p>
      <div className="flex justify-start flex-wrap align-middle mt-6 ml-10">
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform transform ease-in-out delay-100 duration-300"
          >
            <img
              src={item.video?.thumbnails?.[0]?.url}
              alt={item.video?.title}
              className="mx-10 p-2 w-64 h-40 rounded-xl cursor-pointer transition-transform transform ease-in-out delay-100 duration-300"
            />
            <div>
              <p className="font-bold mt-2 mx-10 px-2 w-64 cursor-pointer">
                {item.video.title}
              </p>
              <p className="text-neutral-500 mx-10 px-2 w-64 cursor-pointer capitalize">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
