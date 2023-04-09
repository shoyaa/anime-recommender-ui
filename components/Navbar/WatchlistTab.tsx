import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const WatchlistTab = () => {
  const router = useRouter();
  return (
    <li>
      <Link aria-label="check your watchlist" href="/watchlist">
        <div
          className={`${
            router.pathname === "/watchlist" ? "font-extrabold" : ""
          } flex items-center hover:bg-gray-300 dark:hover:bg-gray-900 w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer`}
        >
          {router.pathname === "/watchlist" ? (
            <HeartIconFilled className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          ) : (
            <HeartIcon className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          )}
          <span className="hidden md:block"> Watchlist</span>
        </div>
      </Link>
    </li>
  );
};

export default WatchlistTab;
