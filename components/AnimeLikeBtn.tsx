import React, { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import Dexie from "dexie";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";
const AnimeLikeBtn = ({ mal_id }: { mal_id: number }) => {
  const likedAnimes = useLiveQuery(() => db.liked.toArray());
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    likedAnimes?.some((anime) => anime.id === mal_id) && setIsLiked(true);
  }, [likedAnimes]);

  async function toggleButton() {
    if (likedAnimes?.some((anime) => anime.id === mal_id)) {
      console.log("if block");
      try {
        await db.liked.delete(mal_id).then(() => setIsLiked(false));
      } catch (err) {}
      return;
    }
    console.log("else block");
    try {
      // Add the new friend!
      const id = await db.liked.add({
        id: mal_id,
        isLiked: true,
      });
    } catch (error) {}
  }

  return (
    <button onClick={toggleButton}>
      {isLiked ? (
        <HeartIconFilled className="h-5 w-5" />
      ) : (
        <HeartIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default AnimeLikeBtn;
