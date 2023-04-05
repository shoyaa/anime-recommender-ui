import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import ThemeButton from "../ThemeButton";
import LoginButton from "./LoginButton";
import WatchlistTab from "./WatchlistTab";
import CalendarTab from "./CalendarTab";
import TrendingTab from "./TrendingTab";
import BrowseTab from "./BrowseTab";
const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="dark:bg-[#161e28] transition-all duration-300 ease-out sm:flex min-h-max md:sticky   w-full fixed  bottom-0 justify-between md:top-5 md:min-h-screen md:w-64  bg-gray-100">
      <div className="flex  md:flex-col  md:px-7 h-full w-full md:w-max  ">
        <Link href="/">
          <div className="pt-5">
            <span className="font-extrabold text-2xl hidden md:inline-block">
              ANIME
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hidden md:inline-block">
                FINDER
              </span>
            </span>
          </div>
        </Link>
        <div className="md:mt-8 w-full md:w-max">
          <span className="font-extrabold pl-2 text-xs hidden md:block text-gray-500">
            MENU
          </span>
          <ul className="font-base flex justify-around items-center md:flex-col md:items-start  text-xl md:space-y-2">
            <TrendingTab />
            <BrowseTab />
            <WatchlistTab />
            <CalendarTab />
            <li>{mounted && <ThemeButton />}</li>
            <LoginButton />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
