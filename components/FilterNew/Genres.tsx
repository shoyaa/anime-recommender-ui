import React from "react";
import Genre from "./Genre";

type GenresProps = {
  mal_id: number;
  name: string;
  url: string;
  count: number;
  state: string;
};
type Props = {
  genreList: GenresProps[];
};

const Genres = ({ genreList }: Props) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="font-bold text-lg">Genres</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {genreList.map((genre) => (
          <Genre key={genre.mal_id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default Genres;
