import Link from "next/link";
import React from "react";
import { GlobeAsiaAustraliaIcon as GlobeAsiaAustraliaIconFilled } from "@heroicons/react/24/solid";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const BrowseTab = () => {
  const router = useRouter();
  return (
    <li>
      <Link
        aria-label="Explore more animes"
        href="/category/include=&exclude=&page=1"
      >
        <div
          className={`${
            router.pathname.includes("category") ? "font-extrabold" : ""
          } flex items-center hover:bg-gray-300 dark:hover:bg-gray-900  w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer`}
        >
          {router.pathname.includes("category") ? (
            <GlobeAsiaAustraliaIconFilled className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          ) : (
            <GlobeAsiaAustraliaIcon className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          )}
          <span className="hidden md:block"> Browse</span>
        </div>
      </Link>
    </li>
  );
};

export default BrowseTab;
