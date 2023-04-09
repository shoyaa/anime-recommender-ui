import { useRouter } from "next/router";
import React from "react";
import { FireIcon as FireIconFilled } from "@heroicons/react/24/solid";
import { FireIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const TrendingTab = () => {
  const router = useRouter();
  return (
    <li>
      <Link aria-label="explore trending animes" href="/">
        <div
          className={`${
            router.pathname === "/" ? "font-extrabold" : ""
          } flex items-center hover:bg-gray-300 dark:hover:bg-gray-900 w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer`}
        >
          {router.pathname === "/" ? (
            <FireIconFilled className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          ) : (
            <FireIcon className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          )}
          <span className="hidden md:block"> Trending</span>
        </div>
      </Link>
    </li>
  );
};

export default TrendingTab;
