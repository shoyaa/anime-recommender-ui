import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { CalculateDays } from "../../lib/calculateNextEpisode";
import { slugify } from "../../lib/slugify";
import { sortByFavorites } from "../../lib/SortArray";
import DetailsSidebar from "../../components/SingleAnime/DetailsSidebar";
import CharacterDetails from "../../components/SingleAnime/CharacterDetails";
import TrailerDetails from "../../components/SingleAnime/TrailerDetails";
import RecommendationDetails from "../../components/SingleAnime/RecommendationDetails";
import { useRouter } from "next/router";
import HeaderDetails from "../../components/SingleAnime/HeaderDetails";
import EpisodeCountdown from "../../components/SingleAnime/EpisodeCountdown";
import SynopsisDetails from "../../components/SingleAnime/SynopsisDetails";
import BannerDetails from "../../components/SingleAnime/BannerDetails";
const SingleAnime = ({
  animeData,
  mappedGenre,
  characters,
  calendar,
  recommendations,
  params,
}: any) => {
  const selectedDate = calendar.filter(
    (item: any) => item.route === slugify(animeData.data.title)
  );
  const router = useRouter();
  useEffect(() => {
    if (params.slug.length <= 1) {
      router.push(
        `/anime/${animeData.data.mal_id}/${slugify(animeData.data.title)}`,
        undefined,
        { shallow: true }
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Single Anime | Anime Recommender</title>
      </Head>
      <Layout data={mappedGenre}>
        <div className="max-w-full  min-h-screen relative">
          <BannerDetails animeData={animeData} />
          <div className="">
            <HeaderDetails animeData={animeData} />
            <div className="lg:mt-10 lg:flex">
              <div className="lg:ml-10 2xl:ml-12 lg:w-[13rem] min-w-[6rem] lg:min-w-[13rem] ">
                <EpisodeCountdown
                  animeData={animeData}
                  selectedDate={selectedDate}
                />
                <DetailsSidebar animeData={animeData} />
              </div>
              <div className="mx-4 lg:mx-10">
                <SynopsisDetails animeData={animeData} />
                <CharacterDetails
                  animeData={animeData}
                  characters={characters}
                />
                <TrailerDetails animeData={animeData} />
                <RecommendationDetails recommendations={recommendations} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleAnime;
export const getServerSideProps = async (context: any) => {
  console.log(context.params);
  const animeRes = await fetch(
    `https://api.jikan.moe/v4/anime/${context.params.slug[0]}/full`
  );
  const animeData = await animeRes.json();

  const animeCharactersRes = await fetch(
    `https://api.jikan.moe/v4/anime/${context.params.slug[0]}/characters`
  );
  const animeCharactersData = await animeCharactersRes.json();
  const animeCharactersSorted = sortByFavorites(
    animeCharactersData.data.filter(
      (character: any) => character.role === "Main"
    )
  ).slice(0, 8);
  const genreRes = await fetch(`http://193.123.33.166/genres`);
  const genreData = await genreRes.json();
  const mappedGenre = genreData.map((item: any) => ({
    ...item,
    state: "neutral",
  }));

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer bjztMXATp7mFeo7xWGgVroi8b3FfiI");
  const requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const calendarRes = await fetch(
    `https://animeschedule.net/api/v3/timetables/sub`,
    requestOptions
  );
  const calendarData = await calendarRes.json();
  const recommendationRes = await fetch(
    `https://api.jikan.moe/v4/anime/${context.params.slug[0]}/recommendations`
  );
  const recommendationData = await recommendationRes.json();

  return {
    props: {
      animeData,
      mappedGenre,
      characters: animeCharactersSorted,
      calendar: calendarData,
      recommendations: recommendationData.data.slice(0, 6),
      params: context.params,
    },
  };
};
