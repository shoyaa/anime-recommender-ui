import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const HeaderDetails = ({ animeData }: any) => {
  return (
    <div className="md:mx-5 lg:mx-10 2xl:mx-12 flex h-[18rem] items-center  lg:mt-12 lg:flex  relative">
      <div className="h-[5rem] sm:h-[10rem] sm:min-w-[10rem] md:h-[15rem] lg:h-[20rem] md:min-w-[10rem]  lg:w-[13rem] min-w-[6rem] lg:min-w-[13rem] bg-blue-300 relative rounded-md">
        <Image
          src={animeData.data.images.jpg.large_image_url}
          alt={animeData.data.title}
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="ml-3 lg:ml-12 text-white">
        <div className="lg:h-[15.5rem]">
          <h3 className="text-2xl lg:text-7xl mb-3 font-extrabold drop-shadow-lg ">
            {animeData.data.title}
          </h3>
          <h4>{animeData.data.title_japanese}</h4>
        </div>
        <div className="flex items-center lg:space-x-3">
          <button className="mt-2 px-2 py-1 border-2 border-gray-500 text-gray-700 rounded-full lg:mt-0 bg-white lg:px-6 lg:py-2 text-sm transition-colors duration-300 lg:border-2 lg:rounded lg:text-fuchsia-500 lg:border-fuchsia-400 shadow-rose-300/30 hover:bg-fuchsia-500 hover:text-fuchsia-100">
            Add to watchlist
          </button>
          <div className="hidden lg:flex items-center px-6 py-2 rounded  bg-blue-100 ">
            <span className=" text-sm text-blue-700">
              {" "}
              {animeData?.data.airing ? `Airing` : "Completed"}
            </span>
          </div>
          <div className="hidden lg:flex items-center text-sm text-blue-700 px-6 py-2 rounded  bg-blue-100 ">
            <UserCircleIcon className="h-5 w-5 mr-1" />
            {new Intl.NumberFormat("en-GB").format(
              animeData?.data.members
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetails;
