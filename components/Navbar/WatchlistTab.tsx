import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

const WatchlistTab = () => {
  return (
    <li>
      <div
        className={`flex items-center hover:bg-gray-300 dark:hover:bg-gray-900  w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer`}
      >
        <HeartIcon className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
        <span className="hidden md:block"> Watchlist</span>
      </div>
    </li>
  );
};

export default WatchlistTab;
