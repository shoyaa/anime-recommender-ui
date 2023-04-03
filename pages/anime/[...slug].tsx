import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
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
import fetcher from "../../lib/fetcher";
const SingleAnime = ({
  fallbackAnimeData,
  mappedGenre,
  fallbackAnimeCharacters,
  calendar,
  fallbackRecommendationData,
  params,
}: any) => {
  const selectedDate = calendar.filter(
    (item: any) => item.route === slugify(fallbackAnimeData.data.title)
  );
  const router = useRouter();
  useEffect(() => {
    //If anime title does not exist on the url. Add it to url.

    if (params.slug.length <= 1) {
      router.push(
        `/anime/${fallbackAnimeData.data.mal_id}/${slugify(
          fallbackAnimeData.data.title
        )}`,
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
      <Layout>
        <div className="max-w-full  min-h-screen relative">
          <BannerDetails animeData={fallbackAnimeData} />
          <div className="">
            <HeaderDetails animeData={fallbackAnimeData} />
            <div className="lg:mt-10 lg:flex">
              <div className="lg:ml-10 2xl:ml-12 lg:w-[13rem] min-w-[6rem] lg:min-w-[13rem] ">
                <EpisodeCountdown
                  animeData={fallbackAnimeData}
                  selectedDate={selectedDate}
                />
                <DetailsSidebar animeData={fallbackAnimeData} />
              </div>
              <div className="mx-4 lg:mx-10">
                <SynopsisDetails animeData={fallbackAnimeData} />
                <CharacterDetails
                  animeData={fallbackAnimeData}
                  characters={fallbackAnimeCharacters}
                />
                <TrailerDetails animeData={fallbackAnimeData} />
                <RecommendationDetails
                  recommendations={fallbackRecommendationData}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleAnime;
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.slug || typeof context.params.slug[0] !== "string") {
    throw new Error("Initial error");
  }
  const params = context.params?.slug[0];
  const fallbackAnimeData = await fetcher(
    `${process.env.ANIME_BASE_URL}/anime/${params}/full`
  );

  const animeCharactersData = await fetcher(
    `${process.env.ANIME_BASE_URL}/anime/${params}/characters`
  );

  const animeCharactersSorted = sortByFavorites(
    animeCharactersData.data.filter(
      (character: any) => character.role === "Main"
    )
  ).slice(0, 8);

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.BEARER_TOKEN}`);
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

  const fallbackRecommendationData = await fetcher(
    `${process.env.ANIME_BASE_URL}/anime/${params}/recommendations`
  );

  console.log(`${process.env.ANIME_BASE_URL}/anime/${params}/recommendations`);
  return {
    props: {
      fallbackAnimeData,

      fallbackAnimeCharacters: animeCharactersSorted,
      calendar: calendarData,
      fallbackRecommendationData: fallbackRecommendationData.data,
      params: context.params,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};
