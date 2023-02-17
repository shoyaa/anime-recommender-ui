import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect } from "react";
import { categoryColors } from "../constants";

type AnimeCardProps = {
  title: string;
  image: string;
  members: number;
  genres: string[];
  synopsis: string;
  status: string;
  episodes: number;
};

const AnimeCard = ({
  title,
  image,
  members,
  genres,
  synopsis,
  status,
  episodes,
}: AnimeCardProps) => {
  const statusBgs: any = {
    "Currently Airing": "from-[#B5179E]",
    "Not yet aired": "from-[#4361EE]",
    "Finished Airing": "from-[#560BAD]",
  };

  const statusBg = statusBgs[status] || "bg-gray-700";

  return (
    <div
      className={`border-4 dark:border-gray-900 ${statusBg} rounded-lg grid grid-cols-[185px,auto] h-[265px] min-w-full dark:bg-gray-700  bg-gray-50  overflow-hidden  shadow-lg `}
    >
      <div className="">
        <div className=" relative  border dark:border-gray-900  bg-gray-50 overflow-hidden  h-full w-full flex items-end ">
          <Image
            alt={title}
            fill
            src={image}
            className="object-cover h-full w-full rounded-l-md"
            sizes="100wv"
            priority
          />
          <div
            className={`relative bg-gradient-to-t from-indigo-500  flex items-end pb-1 w-full h-1/3  pl-5 dark:text-gray-300 text-white  `}
          >
            <div className=" text-lg font-bold ">{status}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[100%]">
        <div className="pl-4 pt-4 max-h-[261px] scrollbar-thumb-gray-800 scrollbar-track-gray-300 scrollbar-thin overflow-auto  ">
          <h1 className="font-extrabold text-gray-800 dark:text-gray-300 pr-5 line-clamp-2">
            {title}
          </h1>
          <div className="flex items-center gap-x-1  ">
            <span className="font-bold text-sm text-gray-600 dark:text-gray-300">
              Members:{" "}
            </span>
            <span className="text-gray-600 font-medium text-sm dark:text-gray-300">
              {members}
            </span>
          </div>

          <div className="flex items-center gap-x-1  mb-2">
            <span className="font-bold text-sm text-gray-600 dark:text-gray-300">
              Episodes:{" "}
            </span>
            <span className="text-gray-600 font-medium text-sm dark:text-gray-300">
              {episodes || "Unknown"}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3 pr-2">
            {genres?.slice(0, 3).map((genre: any) => {
              return (
                <div
                  key={genre.name}
                  className="bg-gray-200 dark:bg-gray-900  w-max px-3  rounded-full font-semibold text-gray-700 dark:text-gray-300 text-xs"
                >
                  {genre.name}
                </div>
              );
            })}
          </div>
          <div className="text-[14px] font-medium leading-tight  tracking-wide pr-4 text-gray-400">
            {synopsis ? synopsis : "No description found."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
