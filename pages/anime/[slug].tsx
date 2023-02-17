import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const SingleAnime = ({ animeData, mappedGenre, characters }: any) => {
  console.log(characters);
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
                className=" object-cover h-full blur-[3px] overflow-hidden object-right brightness-50"
                fill
                src={"/banner.jpg"}
                alt="hhaha"
              />
            </div>
            <div className="mx-24">
              <div className=" mt-14 flex  relative">
                <div className="pb-72 w-52 bg-blue-300 relative overflow-hidden shadow-lg rounded-md">
                  <Image src={"/banner.jpg"} alt="ahaha" fill />
                </div>{" "}
                <div className="ml-5 text-white">
                  <div className="h-[15.5rem]">
                    <h3 className="text-7xl mb-3 font-extrabold drop-shadow-lg ">
                      My Life as Inukai-san's Dog
                    </h3>
                    <h4>犬になったら好きな人に拾われた</h4>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="px-6 py-2 text-sm transition-colors duration-300 border-2 rounded-full shadow-xl text-fuchsia-500 border-fuchsia-400 shadow-rose-300/30 hover:bg-fuchsia-500 hover:text-fuchsia-100">
                      Add to watchlist
                    </button>
                    <div className="flex items-center ">
                      <span
                        className={`h-3 w-3 rounded-full mr-1 ${
                          animeData?.data.airing
                            ? "bg-blue-300"
                            : "bg-yellow-300"
                        }`}
                      ></span>
                      <span className="text-gray-900 font-semibold">
                        {" "}
                        {animeData?.data.airing ? "Airing" : "Completed"}
                      </span>
                    </div>
                    <div className="flex text-gray-900 font-semibold">
                      <UserCircleIcon className="h-6 w-6 mr-1" />
                      {animeData?.data.members}{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 font-semibold text-gray-900">
                {animeData?.data.synopsis}
              </div>
              <div className="flex mt-5">
                <div className="bg-gray-200 p-3 rounded text-sm space-y-2 w-52">
                  <div>
                    <div className="font-semibold">Format</div>
                    <div>{animeData?.data.type}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Episodes</div>
                    <div>{animeData?.data.episodes}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Episode Duration</div>
                    <div>{animeData?.data.duration}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Start Date</div>
                    <div>
                      {new Date(animeData?.data.aired.from).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">End Date</div>
                    <div>
                      {animeData?.data.duration.to
                        ? new Date(animeData?.data.aired.to).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )
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
                        return <li>{producer.name} </li>;
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
                        return <li>{genre.name} </li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div className="ml-5 w-full">
                  <div>
                    <div>
                      <h3 className="mb-5 text-gray-800 font-bold">
                        Characters
                      </h3>
                    </div>
                    <div className="grid grid-cols-4 gap-5 w-full">
                      {characters.data.map((character: any) => {
                        return (
                          <div className="flex bg-gray-200  gap-x-3 px-5 py-2 rounded">
                            <div className="w-full flex flex-col justify-center items-center">
                              <div className="w-full pb-24 relative">
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
                              <div className="w-full pb-24 relative">
                                <Image
                                  alt="test"
                                  fill
                                  src={
                                    character.voice_actors[0].person.images.jpg
                                      .image_url
                                  }
                                  className="object-cover rounded-full"
                                />
                              </div>
                              <span className="text-sm block text-center line-clamp-1">
                                {character.voice_actors[0].person.name}
                              </span>
                              <span className="text-xs block">
                                {" "}
                                {character.voice_actors[0].language}
                              </span>
                            </div>
                          </div>
                        );
                      })}
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

  const genreRes = await fetch(`http://193.123.33.166/genres`);
  const genreData = await genreRes.json();
  const mappedGenre = genreData.map((item: any) => ({
    ...item,
    state: "neutral",
  }));
  return {
    props: {
      animeData,
      mappedGenre,
      characters: animeCharactersData,
    },
  };
};
