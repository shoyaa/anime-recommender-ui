import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { CalculateDays } from "../../lib/calculateNextEpisode";
import { slugify } from "../../lib/slugify";
import { sortByFavorites } from "../../lib/SortArray";
const SingleAnime = ({
  animeData,
  mappedGenre,
  characters,
  calendar,
  recommendations,
}: any) => {
  const selectedDate = calendar.filter(
    (item: any) => item.route === slugify(animeData.data.title)
  );
  console.log(recommendations);

  return (
    <>
      <Head>
        <title>Single Anime | Anime Recommender</title>
      </Head>
      <Layout data={mappedGenre}>
        <div className=" w-full  min-h-screen">
          <div className=" w-full   flex">
            <div className="h-[18.5rem]  absolute w-full overflow-hidden">
              <Image
                className=" object-cover h-full blur-[3px]  overflow-hidden object-right brightness-50"
                fill
                src={animeData.data.images.jpg.large_image_url}
                alt={animeData.data.title}
              />
            </div>
            <div className="mx-24">
              <div className=" mt-14 flex  relative">
                <div className="pb-72 min-w-[13rem] bg-blue-300 relative overflow-hidden rounded-md">
                  <Image
                    src={animeData.data.images.jpg.large_image_url}
                    alt={animeData.data.title}
                    fill
                  />
                </div>{" "}
                <div className="ml-5 text-white">
                  <div className="h-[15.5rem]">
                    <h3 className="text-7xl mb-3 font-extrabold drop-shadow-lg ">
                      {animeData.data.title}
                    </h3>
                    <h4>{animeData.data.title_japanese}</h4>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full text-fuchsia-500 border-fuchsia-400 shadow-rose-300/30 hover:bg-fuchsia-500 hover:text-fuchsia-100">
                      Add to watchlist
                    </button>
                    <div className="flex items-center px-6 py-2 rounded  bg-blue-100 ">
                      <span className=" text-sm text-blue-700">
                        {" "}
                        {animeData?.data.airing ? `Airing` : "Completed"}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-blue-700 px-6 py-2 rounded  bg-blue-100 ">
                      <UserCircleIcon className="h-5 w-5 mr-1" />
                      {animeData?.data.members}{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 font-semibold text-gray-900 bg-gray-200 p-3 rounded-lg">
                {animeData?.data.synopsis}
              </div>
              <div className="flex mt-5">
                <div className="min-w-[13rem]">
                  {animeData?.data.airing && (
                    <div className="bg-gradient-to-r from-violet-300 to-violet-400 shadow-glow   shadow-violet-400  mb-3 p-3 rounded text-xs font-semibold text-white ">
                      <span className="block">Currently Airing</span>

                      {CalculateDays(
                        new Date(selectedDate[0].episodeDate),
                        selectedDate[0].episodeNumber
                      )}
                    </div>
                  )}

                  <div className="bg-gray-200 p-3 rounded text-sm space-y-2 ">
                    <div>
                      <div className="font-semibold">Format</div>
                      <div>{animeData?.data.type}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Episodes</div>
                      <div>
                        {animeData?.data.episodes
                          ? animeData?.data.episodes
                          : "Unknown"}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Episode Duration</div>
                      <div>{animeData?.data.duration}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Start Date</div>
                      <div>
                        {new Date(
                          animeData?.data.aired.from
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">End Date</div>
                      <div>
                        {animeData?.data.duration.to
                          ? new Date(
                              animeData?.data.aired.to
                            ).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Ongoing"}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Favorites</div>
                      <div>{animeData?.data.favorites}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Producers</div>
                      <ul>
                        {animeData?.data.producers.map((producer: any) => {
                          return <li key={producer.name}>{producer.name} </li>;
                        })}
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold">Source</div>
                      <div>{animeData?.data.source}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Genres</div>
                      <ul>
                        {animeData?.data.genres.map((genre: any) => {
                          return <li key={genre.name}>{genre.name} </li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="ml-5 w-full">
                  <div>
                    <div>
                      <h3 className="mb-3 text-gray-800 font-bold">
                        Characters
                      </h3>
                    </div>
                    <div className="grid grid-cols-4 gap-5 w-full">
                      {characters.map((character: any) => {
                        return (
                          <div
                            key={character.character.mal_id}
                            className="flex bg-gray-200  gap-x-3 px-5 py-2 rounded"
                          >
                            <div className="w-full flex flex-col justify-center items-center">
                              <div className="w-full pb-32 relative">
                                <Image
                                  alt="test"
                                  fill
                                  src={character.character.images.jpg.image_url}
                                  className="object-cover rounded-full"
                                />
                              </div>
                              <span className="block text-sm text-center line-clamp-1">
                                {character.character.name}
                              </span>
                              <span className="text-xs ml-1 block">
                                {character.role}
                              </span>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                              <div className="w-full pb-32 relative">
                                <Image
                                  alt="test"
                                  fill
                                  src={
                                    character.voice_actors[0]?.person.images.jpg
                                      .image_url
                                  }
                                  className="object-cover rounded-full"
                                />
                              </div>
                              <span className="text-sm block text-center line-clamp-1">
                                {character.voice_actors[0]?.person.name}
                              </span>
                              <span className="text-xs block">
                                {" "}
                                {character.voice_actors[0]?.language}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {animeData.data.trailer && (
                      <div className="my-5">
                        <div>
                          <h3 className="font-bold mb-3">Trailer</h3>
                          <div>
                            <iframe
                              width="560"
                              height="315"
                              src={animeData.data.trailer.embed_url}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div>
                      <h3 className="font-bold mb-3">Recommendations</h3>
                      <div className="grid grid-cols-6 gap-x-6">
                        {recommendations.map((item: any) => (
                          <div>
                            <div className="relative w-full pb-64">
                              <Image
                                src={item.entry.images.jpg.large_image_url}
                                alt={item.entry.title}
                                className="object-cover"
                                fill
                              />
                            </div>
                            <div className="text-center line-clamp-1 text-sm font-semibold">
                              {" "}
                              {item.entry.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SingleAnime;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const animeRes = await fetch("https://api.jikan.moe/v4/anime/51265/full");
  const animeData = await animeRes.json();

  const animeCharactersRes = await fetch(
    "https://api.jikan.moe/v4/anime/51265/characters"
  );
  const animeCharactersData = await animeCharactersRes.json();
  const animeCharactersSorted = sortByFavorites(
    animeCharactersData.data.filter(
      (character: any) => character.role === "Main"
    )
  )
    .reverse()
    .slice(0, 8);
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
    "https://api.jikan.moe/v4/anime/21/recommendations"
  );
  const recommendationData = await recommendationRes.json();
  return {
    props: {
      animeData,
      mappedGenre,
      characters: animeCharactersSorted,
      calendar: calendarData,
      recommendations: recommendationData.data.slice(0, 6),
    },
  };
};
