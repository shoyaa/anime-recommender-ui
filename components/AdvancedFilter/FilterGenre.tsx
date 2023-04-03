import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect, use } from "react";
import {
  addIncluded,
  selectIncluded,
  removeIncluded,
  addExcluded,
  selectExcluded,
  removeExcluded,
} from "../../features/filters/FilterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

import CheckboxBtn from "../CheckboxBtn";

const FilterGenre = ({
  active,
  handleClick,
  data,

  genreList,
  setGenreList,
}: any) => {
  const included = useAppSelector(selectIncluded);
  const excluded = useAppSelector(selectExcluded);

  const dispatch = useAppDispatch();

  //Store the fetched genre list from homepage to local variable for filtering on type.

  //Input Value For Genre Filter
  const [genreFilterValue, setGenreFilterValue] = useState("");

  // Filter Categories While Typing
  const handleSearchFilter = (e: any) => {
    setGenreFilterValue(e.target.value);

    const results = data.filter((genre: any) => {
      //If the input is empty do nothing.
      if (e.target.value === "") return genreList;
      //Return the matched titles with input value.
      return genre.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setGenreList(results);
  };

  // Get the values from child CheckboxBtn component.
  function handleCheckboxChange(value: string, state: string) {
    console.log("çalıştı");
    switch (state) {
      case "included":
        const includedState = genreList?.map((item: any) =>
          item.mal_id === value ? { ...item, state: "included" } : item
        );
        setGenreList(includedState);
        // Add the value to "included" redux state
        dispatch(addIncluded(value));
        break;
      case "excluded":
        const excludedState = genreList?.map((item: any) =>
          item.mal_id === value ? { ...item, state: "excluded" } : item
        );
        setGenreList(excludedState);
        //Remove the value from "included" redux state
        dispatch(removeIncluded(value));
        dispatch(addExcluded(value));

        break;
      case "neutral":
        const neutralState = genreList?.map((item: any) =>
          item.mal_id === value ? { ...item, state: "neutral" } : item
        );
        setGenreList(neutralState);
        //Remove the value from "excluded" redux state
        dispatch(removeExcluded(value));
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={` py-2 border dark:border-gray-700 px-2  mb-3 select-none dark:bg-gray-700 text-sm lg:text-base`}
    >
      <div
        onClick={() => handleClick(1)}
        className="flex items-center justify-between pl-2"
      >
        <span>Genre</span>
        <ChevronDownIcon
          className={`${
            active === 1 ? "-rotate-180" : "rotate-0"
          } duration-500 transition-all  h-6 w-6 fill-fuchsia-500`}
        />
      </div>
      <div
        className={`${
          active === 1 ? "block" : "hidden"
        } transition-all duration-200`}
      >
        <div className="pb-2 px-2 mt-2">
          <input
            type="text"
            className="w-full border-2  py-1 pl-2 font-light transition-all rounded-lg ease-out focus:ring-gray-500 outline-none duration-300"
            placeholder="type to filter genre"
            value={genreFilterValue}
            onChange={handleSearchFilter}
          />
        </div>
        <div className={` h-52 overflow-auto  `}>
          <ul className=" p-2">
            {genreList?.map((item: any) => {
              return (
                <li key={item.name}>
                  <CheckboxBtn
                    item={item}
                    onCheckboxChange={handleCheckboxChange}
                    value={item.mal_id}
                    checkboxState={item.state}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterGenre;
