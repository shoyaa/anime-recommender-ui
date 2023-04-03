import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import AnimeCard from "./AnimeCard";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
const TrendingAnimes = ({ fallbackPopularAnimes }: any) => {
  type PopularAnimes = {
    data?: Anime[];
    error?: Error;
    isValidating?: boolean;
  };

  type Anime = {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        large_image_url: string;
      };
    };
    members: number;
    genres: {
      mal_id: number;
      name: string;
      url: string;
    }[];
    synopsis: string;
    status: string;
    episodes: number;
  };

  const { data: popularAnimes } = useSWR<PopularAnimes>(
    `${process.env.ANIME_BASE_URL}/top/anime?filter=airing&page=1`,
    fetcher,
    { fallbackData: fallbackPopularAnimes }
  );

  return (
    <div className="mx-2 md:mx-10 mt-5">
      <div>
        <h1 className="dark:text-gray-300 text-xl text-gray-600 font-extrabold mb-5">
          TRENDING ANIMES
        </h1>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="grid md:gap-x-16 gap-y-8 grid-rows-auto-fill grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {popularAnimes?.data?.slice(0, 12).map((anime: Anime) => {
            const genres = anime.genres.map((genre) => genre.name);
            return (
              <AnimeCard
                key={anime.mal_id}
                title={anime.title}
                image={anime.images.jpg.large_image_url}
                members={anime.members}
                genres={genres}
                synopsis={anime.synopsis}
                status={anime.status}
                episodes={anime.episodes}
                mal_id={anime.mal_id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingAnimes;
