import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";
import type { Liked } from "../db/tables/likedAnimes";
import Layout from "../components/Layout";

const WatchList = () => {
  const likedAnimes = useLiveQuery(() => db.liked.toArray());
  const [animeList, setAnimeList] = useState<Liked[]>([]);

  useEffect(() => {
    if (likedAnimes !== undefined) {
      setAnimeList(likedAnimes);
    }
  }, [likedAnimes]);

  return (
    <Layout>
      <div className="mx-2 md:mx-10 mt-5 h-screen">
        <div>
          <h1 className="dark:text-gray-300 text-xl text-gray-600 font-extrabold mb-5">
            YOUR LIKED ANIMES
          </h1>
        </div>
        <div className="flex gap-x-10 w-full">
          <div className="grid md:gap-x-16 gap-y-8 grid-rows-auto-fill grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            {animeList?.map((anime: Liked) => {
              const genres = anime.genres.map((genre) => genre);
              console.log(anime.id);
              return (
                <AnimeCard
                  key={anime.id}
                  mal_id={anime.id}
                  title={anime.title}
                  image={anime.image}
                  members={anime.members}
                  genres={genres}
                  synopsis={anime.synopsis}
                  status={anime.status}
                  episodes={anime.episodes}
                  priority={false}
                />
              );
            })}
            {animeList.length === 0 && (
              <div>
                <h3>Add some animes -_-&ldquo;</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WatchList;
