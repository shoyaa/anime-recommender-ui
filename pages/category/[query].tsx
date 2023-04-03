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
import { useAppDispatch, useAppSelector } from "../../hooks";

import {
  removeExcluded,
  removeIncluded,
  selectGenreList,
  setGenreList,
} from "../../features/filters/FilterSlice";
import FilterContainer from "../../components/FilterNew/FilterContainer";
import { getAnimeRecommendation } from "../../lib/getAnimeRecommendation";
import { getAnimeGenres } from "../../lib/getAnimeGenres";

const Category = ({ anime, genres }: any) => {
  const [loading, setLoading] = useState(true);

  //Skeleton Loading Effect
  useEffect(() => {
    setLoading(true);
    if (genres) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [genres]);

  return (
    <>
      <Head>
        <title>Browse | AnimeRecommender </title>
      </Head>
      <Layout>
        <div className=" w-full px-10 mx-auto pt-5 min-h-screen">
          <FilterContainer genres={genres} />
          <h1 className="font-bold  text-lg">FILTER RESULTS</h1>

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
                      mal_id={anime.mal_id}
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
  const { recommendationData, query } = await getAnimeRecommendation(context);

  const genreData = await getAnimeGenres();
  const search = context.query.query;
  const searchParams = new Proxy(new URLSearchParams(search), {
    get: (params: any, prop: string) => params.get(prop),
  });
  const include = searchParams.include;
  const exclude = searchParams.exclude;

  //Check if there is included or excluded genres exist in the url. If it exists change their status.
  const genreFiltered = genreData.map((item: any) => {
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
      anime: recommendationData,
      genres: genreFiltered,
    }, // will be passed to the page component as props
  };
}
