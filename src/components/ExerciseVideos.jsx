import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="w-screen">
      <p className="text-2xl sm:text-2xl capitalize mt-10 sm:mt-10 ml-3 sm:ml-20 font-bold">
        Watch How To Do{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise
      </p>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start align-middle mt-6 ml-5 sm:ml-10 md:mx-20 lg:mx-4">
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform transform ease-in-out delay-100 duration-300 mb-6 sm:mb-0"
          >
            <img
              src={item.video?.thumbnails?.[0]?.url}
              alt={item.video?.title}
              className="w-60 sm:w-64 h-36 sm:h-40 mx-auto sm:mx-10 p-2 rounded-xl cursor-pointer transition-transform transform ease-in-out delay-100 duration-300"
            />
            <div className="text-center sm:text-left">
              <p className="font-bold mt-2 px-2 w-60 sm:w-64 mx-auto cursor-pointer">
                {item.video.title}
              </p>
              <p className="text-neutral-500 px-2 w-60 sm:w-64 mx-auto cursor-pointer capitalize">
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
