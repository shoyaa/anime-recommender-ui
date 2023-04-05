import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { convertDate } from "../../lib/convertDate";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getDaysInWeek, getWeekNumber } from "../../lib/getWeekNumber";
import { getAnimeSchedule } from "../../lib/getAnimeSchedule";
import { genres } from "../../lib/constants/genres";

const Calendar = ({
  data,
  isNextWeekExists,
  isPreviousWeekExists,
  weekQuery,
}: any) => {
  const animeByDayOfWeek: any = [
    { day: "Monday", data: [], currentDay: [], isToday: false },
    { day: "Tuesday", data: [], currentDay: [], isToday: false },
    { day: "Wednesday", data: [], currentDay: [], isToday: false },
    { day: "Thursday", data: [], currentDay: [], isToday: false },
    { day: "Friday", data: [], currentDay: [], isToday: false },
    { day: "Saturday", data: [], currentDay: [], isToday: false },
    { day: "Sunday", data: [], currentDay: [], isToday: false },
  ];

  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const router = useRouter();
  const handlePreviousClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/calendar/week=${weekQuery - 1}`);
  };
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/calendar/week=${Number(weekQuery) + 1}`);
  };
  //Store the fetched data inside animeByDayOfWeek array. I am doing this to seperate
  //  data in their own days such as Mondays, Tuesdays etc..
  data.forEach((animeItem: any) => {
    const airDate = new Date(animeItem.episodeDate);

    const dayOfWeek = airDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const dayWithMonth = airDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const dayObj = animeByDayOfWeek.find((day: any) => day.day === dayOfWeek);

    if (dayWithMonth === today) {
      dayObj.isToday = true;
    }

    dayObj.data.push(animeItem);
  });

  //Get Number of days and store them in dates array. Example: 13 February 14 February etc..
  const daysInWeek = getDaysInWeek(weekQuery, 2023);

  return (
    <>
      <Head>
        <title>Anime Calendar | Anime Recommender</title>
      </Head>
      <Layout data={genres}>
        <div className=" w-full px-10 mx-auto pt-5 min-h-screen">
          <div>
            <div className="flex items-center">
              <h1 className="font-extrabold text-3xl mr-2">Winter 2023</h1>{" "}
              <button
                className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-100 ease-out disabled:text-gray-300"
                disabled={!isPreviousWeekExists || weekQuery === "0"}
                onClick={handlePreviousClick}
              >
                <ChevronLeftIcon className={`h-6 w-6 `} />
              </button>
              <button
                className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-100 ease-out disabled:text-gray-300 "
                disabled={!isNextWeekExists}
                onClick={handleNextClick}
              >
                <ChevronRightIcon className="h-6 w-6  " />
              </button>
            </div>
            <p className=" lg:w-1/3 leading-7">
              Anime calendar is a visual guide that showcases upcoming and
              ongoing anime series releases, premieres, and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 text-sm lg:text-base lg:grid-cols-3 2xl:grid-cols-7  gap-x-6 mt-5">
            {animeByDayOfWeek?.map((scheduleObject: any, index: number) => {
              return (
                <div key={scheduleObject.day} className="">
                  <div
                    className={`${
                      scheduleObject.isToday === true
                        ? "text-orange-500 border-orange-500 dark:border-orange-500"
                        : "border-black dark:border-gray-400"
                    } font-extrabold pb-20  border-b-4   `}
                  >
                    {scheduleObject.day}
                  </div>
                  <div
                    className={`${
                      scheduleObject.isToday === true
                        ? "bg-[#f0efeb] dark:bg-[#10161e] p-5"
                        : ""
                    } py-5 `}
                  >
                    <div
                      className={`${
                        scheduleObject.isToday === true ? "text-orange-500" : ""
                      } text-4xl font-extrabold`}
                    >
                      {Number(daysInWeek[index].slice(-2)) +
                        " " +
                        daysInWeek[index].slice(5, 8)}
                    </div>
                    <div className="mt-5">
                      <ul>
                        {scheduleObject.data.map((anime: any) => {
                          return (
                            <li key={anime.title} className="flex mb-2">
                              <div className="flex-1">{anime.title}</div>{" "}
                              <time className="ml-3 font-bold">
                                {convertDate(anime.episodeDate)}
                              </time>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get genre names and add them the state "neutral" for filtering.
  /* const genreRes = await fetch(`http://193.123.33.166/genres`);
  const genreData = await genreRes.json();
  const mappedGenre = genreData.map((item: any) => ({
    ...item,
    state: "neutral",
  }));
*/
  const search = context.query.slug?.toString();
  const searchParams = new Proxy(new URLSearchParams(search), {
    get: (params: any, prop: string) => params.get(prop),
  });
  const weekQuery = searchParams.week;
  //Anime schedule API authorization.
  const data = await getAnimeSchedule(weekQuery);
  if (!data) {
    return {
      redirect: {
        destination: `/calendar/week=${getWeekNumber()}`,
        permanent: false,
      },
    };
  }

  const checkNextWeek = await getAnimeSchedule(
    (parseInt(weekQuery) + 1).toString()
  );
  const checkPreviousWeek = await getAnimeSchedule(
    (parseInt(weekQuery) - 1).toString()
  );
  const isNextWeekExists = !!checkNextWeek;
  const isPreviousWeekExists = !!checkPreviousWeek;
  /* if (weekQuery >= 11 || weekQuery <= 0) {
    return {
      redirect: {
        destination: `/calendar/week=${getWeekNumber()}`,
        permanent: false,
      },
    };
  } */
  return {
    props: {
      data,
      isNextWeekExists,
      isPreviousWeekExists,
      weekQuery,
    },
  };
};

export default Calendar;
