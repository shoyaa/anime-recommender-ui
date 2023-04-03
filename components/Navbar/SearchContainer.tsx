import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { slugify } from "../../lib/slugify";
import { sortByFavorites } from "../../lib/SortArray";
import useDebounce from "../../lib/useDebounce";
import useOnClickOutside from "../../lib/useOnClickOutside";
import useSWR from "swr";
import SearchSuggestions from "./SearchSuggestions";
const SearchContainer = () => {
  const [value, setValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const [dropdownState, setDropdownState] = useState(false);
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div className="ml-2 md:ml-10 my-5 relative ">
      <div className="w-max" onClick={() => setDropdownState(true)}>
        <form className="relative w-max    flex  ">
          <input
            placeholder="Search everything..."
            className="px-9 py-2 w-64  border-2 border-gray-400 dark:bg-gray-700 rounded-full outline-none"
            type="text"
            onChange={handleChange}
            value={value}
          />
          <div className=" rounded-lg absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </div>
        </form>
      </div>
      <SearchSuggestions
        debouncedValue={debouncedValue}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
        setValue={setValue}
      />
    </div>
  );
};

export default SearchContainer;
