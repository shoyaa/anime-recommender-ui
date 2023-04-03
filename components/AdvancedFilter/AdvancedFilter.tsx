import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { animeStatus, animeType } from "../../lib/constants";
import FilterGenre from "./FilterGenre";
import FilterStatus from "./FilterStatus";
import FilterType from "./FilterType";
import CheckboxBtn from "../CheckboxBtn";
import {
  clearExcluded,
  clearIncluded,
  selectExcluded,
  selectIncluded,
} from "../../features/filters/FilterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { sortArray } from "../../lib/SortArray";

const AdvancedFilter = ({ data, include, exclude }: any) => {
  const included = useAppSelector(selectIncluded);
  const excluded = useAppSelector(selectExcluded);
  const [active, setActive] = useState(null);
  const [typeQuery, setTypeQuery] = useState("");
  const [statusQuery, setStatusQuery] = useState("");
  const [genreList, setGenreList] = useState(data);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleClick = (index: any) => {
    setActive(index === active ? null : index);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.replace(
      `/category/include=${included}&exclude=${excluded}&page=1${
        typeQuery ? `&type=${typeQuery}` : ""
      }${statusQuery ? `&status=${statusQuery}` : ""}`
    );
  };
  useEffect(() => {
    setGenreList(sortArray(data));
  }, [include, exclude]);

  useEffect(() => {
    //Resetting the states on every page change.
    dispatch(clearExcluded());
    dispatch(clearIncluded());
  }, []);

  const handleClearFilters = () => {
    dispatch(clearIncluded());
    dispatch(clearExcluded());
    const resetGenreStatus = data.map((item: any) => ({
      ...item,
      state: "neutral",
    }));
    setGenreList(resetGenreStatus);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-3 lg:p-5 dark:bg-gray-800 bg-white rounded-lg border-2 border-fuchsia-900 z-50 shadow-xl w-max  md:w-96 select-none ">
      <div className="ml-2 mb-3">
        <h2 className=" text-md font-bold text-gray-600">Advanced Search</h2>
      </div>
      <FilterGenre
        data={data}
        genreList={genreList}
        setGenreList={setGenreList}
        handleClick={handleClick}
        active={active}
      />
      <FilterType
        typeQuery={typeQuery}
        setTypeQuery={setTypeQuery}
        handleClick={handleClick}
        active={active}
      />
      <FilterStatus
        statusQuery={statusQuery}
        setStatusQuery={setStatusQuery}
        handleClick={handleClick}
        active={active}
      />

      <div className="flex gap-x-2 mt-5 ">
        <button
          onClick={handleSubmit}
          className="bg-fuchsia-900 px-5 py-1  rounded-full text-white  "
        >
          Search
        </button>
        <button
          onClick={handleClearFilters}
          className="px-5 py-1 border  rounded-full"
        >
          {" "}
          Clear Filters{" "}
        </button>
      </div>
      {/*
       */}
    </div>
  );
};

export default AdvancedFilter;
