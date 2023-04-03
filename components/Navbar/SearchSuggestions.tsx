import React, { useRef, useState } from "react";
import useSWR from "swr";
import Highlight from "./Highlight";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../lib/slugify";
import useOnClickOutside from "../../lib/useOnClickOutside";
import { sortByFavorites } from "../../lib/SortArray";
import SearchSkeleton from "./SearchSkeleton";
const SearchSuggestions = ({
  debouncedValue,
  setDropdownState,
  dropdownState,
  setValue,
}: any) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    debouncedValue
      ? `${process.env.NEXT_PUBLIC_ANIME_BASE_URL}/anime?q=${debouncedValue}&sfw`
      : null,
    fetcher
  );

  const searchDropdownRef = useRef<HTMLDivElement>(null);
  const clickOutSideHandler = () => {
    setDropdownState(false);
  };

  useOnClickOutside(searchDropdownRef, clickOutSideHandler);

  const clickLinkHandler = () => {
    setValue("");
    setDropdownState(false);
  };
  return (
    <div
      ref={searchDropdownRef}
      className={`${
        dropdownState ? "block" : "hidden"
      } animate-in fade-in  absolute top-14 z-50 w-64 bg-white border-2 rounded-lg py-2 px-2`}
    >
      {isLoading && [...Array(5).keys()].map((item) => <SearchSkeleton />)}
      {error && "Failed to load"}
      {data?.data.length === 0 && "Nothing found."}

      {data?.data.length > 0 &&
        sortByFavorites(data?.data)
          .filter((item: any) =>
            slugify(item.title).includes(slugify(debouncedValue))
          )
          .slice(0, 6)
          .map((item: any) => (
            <Link
              key={item.mal_id}
              href={`/anime/${item.mal_id}/${slugify(item.title)}`}
            >
              <div
                className="py-1 border-b flex items-center hover:bg-gray-100  "
                key={item.mal_id}
                onClick={clickLinkHandler}
              >
                <Image
                  height={30}
                  width={30}
                  alt={item.title}
                  src={item.images.webp.large_image_url}
                  className="object-cover self-center rounded w-auto h-auto"
                />{" "}
                <div className="line-clamp-2 ml-2">
                  <Highlight text={item.title} match={debouncedValue} />
                </div>
              </div>
            </Link>
          ))}
      {!isLoading && !error && data === undefined && "Search something."}
    </div>
  );
};

export default SearchSuggestions;
