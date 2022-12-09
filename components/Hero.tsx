import React from "react";

const Hero = () => {
  return (
    <div className=" mx-auto flex-1 py-3 px-7 ml-20">
      <div
        style={{
          backgroundImage: "url('/bgtest.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-3xl flex items-center justify-center"
      >
        <div className="py-32 flex flex-col items-center">
          <h1 className="text-8xl font-semibold text-gray-800 mb-2">
            Find Your Anime
          </h1>
          <p className="max-w-[840px] text-2xl text-center text-gray-800">
            Are you trying to find which anime to start THEN YOU ARE ON THE
            RIGHT PLACE
          </p>
          <button className="bg-blue-900 text-white text-2xl font-semibold rounded-full px-12 mt-5 h-20">
            Starto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
