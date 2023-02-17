import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import Layout from "../../components/Layout";
import AnimeCard from "../../components/AnimeCard";
import AdvancedFilter from "../../components/AdvancedFilter/AdvancedFilter";
import SkeletonLoader from "../../components/SkeletonLoader";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { stringToNum } from "../../lib/stringToNum";
import { useAppDispatch } from "../../hooks";

import {
  removeExcluded,
  removeIncluded,
} from "../../features/filters/FilterSlice";

const Category = ({ anime, data, include, exclude, type, status }: any) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  //Getting the included and excluded genres from the url to show it as a buttons.
  const { filters } = useMemo(() => {
    const includedGenres = data.filter((genre: any) =>
      stringToNum(include).includes(genre.mal_id)
    );
    const excludedGenres = data.filter((genre: any) =>
      stringToNum(exclude).includes(genre.mal_id)
    );
    return {
      filters: {
        includedGenres,
        excludedGenres,
      },
    };
  }, [include, exclude]);

  //Skeleton Loading Effect
  useEffect(() => {
    setLoading(true);
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [data]);

  const removeCategory = async (id: any, filtertype: string) => {
    //Remove the id from the included or excluded array and push it to the url.

    let includeFilter = include;
    let excludeFilter = exclude;
    if (filtertype === "included") {
      //Convert string to array to filter it then convert it back to string.
      includeFilter = include
        .split(",")
        .filter((item: any) => item !== id.toString())
        .join(",");

      dispatch(removeIncluded(id));
    }
    if (filtertype === "excluded") {
      excludeFilter = exclude
        .split(",")
        .filter((item: any) => item !== id.toString())
        .join(",");

      dispatch(removeExcluded(id));
    }

    router.push(
      `/category/include=${includeFilter}&exclude=${excludeFilter}&page=1${
        type ? `&type=${type}` : ""
      }${status ? `&status=${status}` : ""}`
    );

    return;
  };

  return (
    <>
      <Head>
        <title>Browse | AnimeRecommender </title>
      </Head>
      <Layout data={data} include={include} exclude={exclude}>
        <div className=" w-full px-10 mx-auto pt-5 min-h-screen">
          <h1 className="font-bold  text-lg">Category Search Results</h1>
          <div className="flex gap-x-2 mt-2">
            {filters.includedGenres.map((item: any) => {
              return (
                <div
                  onClick={() => removeCategory(item.mal_id, "included")}
                  className="bg-green-200 text-green-700 font-semibold hover:scale-105 ease-out duration-300 px-2 rounded-lg py-1 flex items-center cursor-pointer"
                  key={item.mal_id}
                >
                  {item.name} <XMarkIcon className="ml-2 h-3 w-3" />
                </div>
              );
            })}
          </div>
          <div className="flex gap-x-2 mt-2">
            {filters.excludedGenres.map((item: any) => {
              return (
                <div
                  onClick={() => removeCategory(item.mal_id, "excluded")}
                  className="bg-red-300 px-2 text-red-900 rounded-lg font-semibold hover:scale-105 ease-out duration-300 py-1 flex items-center cursor-pointer "
                  key={item.mal_id}
                >
                  {item.name} <XMarkIcon className="ml-2 h-3 w-3" />
                </div>
              );
            })}
          </div>
          {}
          <div className="mt-5">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 grid-rows-auto-fill lg:grid-cols-3">
              {loading ? (
                Array.from(Array(10).keys()).map((item) => {
                  return <SkeletonLoader key={item} />;
                })
              ) : anime?.data.length ? (
                anime.data.map((anime: any) => {
                  return (
                    <AnimeCard
                      key={anime.mal_id}
                      title={anime.title}
                      image={anime.images.jpg.large_image_url}
                      members={anime.members}
                      genres={anime.genres}
                      synopsis={anime.synopsis}
                      status={anime.status}
                      episodes={anime.episodes}
                    />
                  );
                })
              ) : (
                <h2 className="font-extrabold text-lg animate-fadeIn ">
                  No Results
                </h2>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;

export async function getServerSideProps(context: any) {
  const search = context.query.query;
  const searchParams = new Proxy(new URLSearchParams(search), {
    get: (params: any, prop: string) => params.get(prop),
  });
  //Get every params from the url to make query to api.
  const query = `http://193.123.33.166/genre-recommendation?include=${
    searchParams.include
  }&exclude=${searchParams.exclude}&page=${searchParams.page}${
    searchParams.query || ""
  }${searchParams.status ? `&status=${searchParams.status}` : ""}${
    searchParams.type ? `&type=${searchParams.type}` : ""
  } `;

  const req = await fetch(query);

  const include = searchParams.include;
  const exclude = searchParams.exclude;
  const data = await req.json();
  const res2 = await fetch(`http://193.123.33.166/genres`);

  const rawData2 = await res2.json();
  //Check if there is included or excluded genres exist in the url. If it exists change their status.
  const data2 = rawData2.map((item: any) => {
    if (stringToNum(include).includes(item.mal_id)) {
      return { ...item, state: "included" };
    }
    if (stringToNum(exclude).includes(item.mal_id)) {
      return { ...item, state: "excluded" };
    } else {
      return { ...item, state: "neutral" };
    }
  });
  return {
    props: {
      anime: data,
      data: data2,

      include: searchParams.include,
      exclude: searchParams.exclude,
      type: searchParams.type,
      status: searchParams.status,
    }, // will be passed to the page component as props
  };
}
