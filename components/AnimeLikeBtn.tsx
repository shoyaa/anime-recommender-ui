import React, { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import Dexie from "dexie";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";

type AnimeCardProps = {
  title: string;
  image: string;
  members: number;
  genres: string[];
  synopsis: string;
  status: string;
  episodes: number;
  mal_id: number;
};

const AnimeLikeBtn = ({
  title,
  image,
  members,
  genres,
  synopsis,
  status,
  episodes,
  mal_id,
}: AnimeCardProps) => {
  const likedAnimes = useLiveQuery(() => db.liked.toArray());
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    likedAnimes?.some((anime) => anime.id === mal_id) && setIsLiked(true);
  }, [likedAnimes]);

  async function toggleButton() {
    if (likedAnimes?.some((anime) => anime.id === mal_id)) {
      try {
        await db.liked.delete(mal_id).then(() => setIsLiked(false));
      } catch (err) {}
      return;
    }

    try {
      // Add the new friend!
      const id = await db.liked.add({
        id: mal_id,
        isLiked: true,
        title,
        image,
        members,
        genres,
        synopsis,
        status,
        episodes,
        mal_id,
      });
    } catch (error) {}
  }

  return (
    <button aria-label="like button" onClick={toggleButton}>
      {isLiked ? (
        <HeartIconFilled className="h-5 w-5 fill-pink-500" />
      ) : (
        <HeartIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default AnimeLikeBtn;
