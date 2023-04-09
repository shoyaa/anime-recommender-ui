import { CalendarIcon } from "@heroicons/react/24/outline";
import { CalendarIcon as CalendarIconFilled } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getWeekNumber } from "../../lib/getWeekNumber";

const CalendarTab = () => {
  const router = useRouter();
  return (
    <li>
      <Link
        aria-label="explore anime calendar"
        href={`/calendar/week=${getWeekNumber()}`}
      >
        <div
          className={`${
            router.pathname.includes("calendar") ? "font-extrabold" : ""
          } flex items-center hover:bg-gray-300 dark:hover:bg-gray-900  w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer`}
        >
          {router.pathname.includes("calendar") ? (
            <CalendarIconFilled className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          ) : (
            <CalendarIcon className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          )}
          <span className="hidden md:block"> Calendar</span>
        </div>
      </Link>
    </li>
  );
};

export default CalendarTab;
