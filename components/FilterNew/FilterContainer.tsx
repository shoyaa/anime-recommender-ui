import React, { useState } from "react";
import FilterSelect from "./FilterSelect";
import GenreContainer from "./GenreContainer";
import { animeType } from "../../lib/constants/index";
import { animeStatus } from "../../lib/constants/index";

import Genres from "./Genres";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  clearExcluded,
  clearIncluded,
  selectExcluded,
  selectIncluded,
} from "../../features/filters/FilterSlice";
import { useRouter } from "next/router";
const FilterContainer = ({ genres }: any) => {
  const [genreList, setGenreList] = useState(genres);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const includedGenres = useAppSelector(selectIncluded);
  const excludedGenres = useAppSelector(selectExcluded);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = () => {
    const typeQuery = selectedType !== "All" ? `&type=${selectedType}` : "";
    const statusQuery =
      selectedStatus !== "All" ? `&status=${selectedStatus}` : "";
    const includedQuery = includedGenres ? includedGenres : "";
    const excludedQuery = excludedGenres ? excludedGenres : "";

    router.push(
      `/category/include=${includedQuery}&exclude=${excludedQuery}${typeQuery}${statusQuery}`
    );
  };

  const handleClear = () => {
    dispatch(clearIncluded());
    dispatch(clearExcluded());
    setSelectedStatus("All");
    setSelectedType("All");
    const initialState = genres.map((genre: any) => ({
      ...genre,
      state: "neutral",
    }));
    setGenreList(initialState);
  };

  return (
    <div className="p-8 bg-gradient-to-b from-slate-200 to-gray-50 rounded-lg mb-4">
      <div className="mb-4">
        <h3 className="font-bold text-lg">Filter</h3>
      </div>
      <div className="flex gap-x-4 mb-4">
        <FilterSelect
          label="Type"
          options={animeType}
          selectedOption={selectedType}
          onOptionSelected={setSelectedType}
        />
        <FilterSelect
          label="Status"
          options={animeStatus}
          selectedOption={selectedStatus}
          onOptionSelected={setSelectedStatus}
        />
      </div>
      <GenreContainer>
        <Genres genreList={genreList} />
      </GenreContainer>
      <div className="mt-4 font-bold">
        <button
          onClick={handleClick}
          className="bg-fuchsia-700 text-white px-3 py-1 rounded mr-4"
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          className="bg-white text-gray-900 border border-gray-900 px-3 py-1 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterContainer;
