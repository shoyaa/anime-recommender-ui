import React, { useState, useEffect } from "react";
import {
  addExcluded,
  addIncluded,
  removeExcluded,
  removeIncluded,
} from "../../features/filters/FilterSlice";
import { useAppDispatch } from "../../hooks";
type GenresProps = {
  genre: {
    mal_id: number;
    name: string;
    url: string;
    count: number;
    state: string;
  };
};
type GenreColorsProps = {
  [key: string]: string;
};
type StatusProps = string;

const Genre = ({ genre }: GenresProps) => {
  const [status, setStatus] = useState<StatusProps>(genre.state);
  const dispatch = useAppDispatch();
  const genreColors: GenreColorsProps = {
    neutral: "border-gray-500",
    included: "border-green-700  bg-green-200 text-green-900 font-semibold",
    excluded: "border-red-700 bg-red-200 text-red-900 font-semibold",
  };
  const borderColor = genreColors[status];
  const handleClick = () => {
    switch (status) {
      case "neutral":
        setStatus("included");
        dispatch(addIncluded(genre.mal_id));
        break;
      case "included":
        setStatus("excluded");
        dispatch(removeIncluded(genre.mal_id));
        dispatch(addExcluded(genre.mal_id));
        break;
      case "excluded":
        dispatch(removeExcluded(genre.mal_id));
        setStatus("neutral");
        break;
      default:
        break;
    }
  };
  // Use the useEffect hook to update the Redux store when the component mounts, if the genre is already included/excluded.
  useEffect(() => {
    console.log("çalıştı");
    switch (status) {
      case "included":
        dispatch(addIncluded(genre.mal_id));
        break;
      case "excluded":
        dispatch(addExcluded(genre.mal_id));

        break;
      default:
        break;
    }
  }, [dispatch, genre.mal_id, status]);
  //Check if there is a changes on genreList data on FilterContainer
  useEffect(() => {
    setStatus(genre.state);
  }, [genre]);

  return (
    <button
      onClick={handleClick}
      className={`${borderColor} text-sm border  px-3 py-1 rounded cursor-pointer select-none transition-all duration-300 ease-out`}
      key={genre.mal_id}
    >
      {genre.name}
    </button>
  );
};

export default Genre;
