import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import AnimeCard from "./AnimeCard";

const TrendingAnimes = ({ popularAnimes, data }: any) => {
  return (
    <div className="mx-2 md:mx-10 mt-5">
      <div>
        <h1 className="dark:text-gray-300 text-xl text-gray-600 font-extrabold mb-5">
          TRENDING ANIMES
        </h1>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="grid md:gap-x-16 gap-y-8 grid-rows-auto-fill grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {popularAnimes.data.slice(0, 12).map((anime: any) => {
            return (
              <AnimeCard
                key={anime.mal_id}
                title={anime.title}
                image={anime.images.jpg.large_image_url}
                members={anime.members}
                genres={anime.genres}
                synopsis={anime.synopsis}
                status={anime.status}
                episodes={anime.episodes}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingAnimes;
