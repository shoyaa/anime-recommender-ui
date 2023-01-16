import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import AdvancedFilter from "./AdvancedFilter";

const TrendingAnimes = ({ popularAnimes, data }: any) => {
  popularAnimes.data.map((item: any) => {
    console.log(item.title);
  });
  return (
    <div className="mt-5 pr-4">
      <div>
        <h1 className="text-center text-3xl font-extrabold mb-5">
          TRENDING ANIMES
        </h1>
      </div>
      <div className="flex gap-x-10 w-full">
        <div className="grid gap-x-3 grid-cols-3">
          <div className="border rounded-lg flex bg-white h-max overflow-hidden clip-right-bottom">
            <div className="h-max py-5 pl-5">
              <div className=" relative  border rounded-lg bg-gray-50 overflow-hidden  h-[200px] w-[100px]">
                <Image
                  alt="konosuba"
                  fill
                  src="/assets/konosuba.jpg"
                  className="object-cover h-full w-full "
                />
              </div>
            </div>
            <div>
              <div className="p-5">
                <h1 className="font-semibold text-lg mb-2">
                  {" "}
                  Kono Subarashii Sekai ni Shukufuku wo!
                </h1>
                <div className="flex items-center gap-x-1 mb-2">
                  <UserIcon className="h-4 w-4" />
                  <span className="text-gray-600 font-semibold text-sm">
                    250K
                  </span>
                </div>
                <div className="flex gap-x-2 mb-3">
                  <div className="bg-blue-50 w-max px-3 text-blue-700">
                    Action
                  </div>
                  <div className="bg-blue-50 w-max px-3 text-blue-700">
                    Comedy
                  </div>
                </div>
                <p className="scrollbar text-sm text-gray-800 overflow-auto h-32">
                  After dying a laughable and pathetic death on his way back
                  from buying a game, high school student and recluse Kazuma
                  Satou finds himself sitting before a beautiful but obnoxious
                  goddess named Aqua. She provides the NEET with two options:
                  continue on to heaven or reincarnate in every gamer's dream—a
                  real fantasy world! Choosing to start a new life, Kazuma is
                  quickly tasked with defeating a Demon King who is terrorizing
                  villages. But before he goes, he can choose one item of any
                  kind to aid him in his quest, and the future hero selects
                  Aqua. But Kazuma has made a grave mistake—Aqua is completely
                  useless!
                </p>
              </div>
              <div className="bg-blue-300 -mr-1 py-1 rounded pl-5 text-white -skew-x-12">
                Completed
              </div>
            </div>
          </div>

          <div className="border rounded-lg flex bg-white h-max overflow-hidden clip-right-bottom">
            <div className="h-max py-5 pl-5">
              <div className=" relative  border rounded-lg bg-gray-50 overflow-hidden  h-[200px] w-[100px]">
                <Image
                  alt="konosuba"
                  fill
                  src="/assets/konosuba.jpg"
                  className="object-cover h-full w-full "
                />
              </div>
            </div>
            <div>
              <div className="p-5">
                <h1 className="font-semibold text-lg mb-2">
                  {" "}
                  Kono Subarashii Sekai ni Shukufuku wo!
                </h1>
                <div className="flex items-center gap-x-1 mb-2">
                  <UserIcon className="h-4 w-4" />
                  <span className="text-gray-600 font-semibold text-sm">
                    250K
                  </span>
                </div>
                <div className="flex gap-x-2 mb-3">
                  <div className="bg-blue-50 w-max px-3 text-blue-700">
                    Action
                  </div>
                  <div className="bg-blue-50 w-max px-3 text-blue-700">
                    Comedy
                  </div>
                </div>
                <p className="scrollbar text-sm text-gray-800 overflow-auto h-32">
                  After dying a laughable and pathetic death on his way back
                  from buying a game, high school student and recluse Kazuma
                  Satou finds himself sitting before a beautiful but obnoxious
                  goddess named Aqua. She provides the NEET with two options:
                  continue on to heaven or reincarnate in every gamer's dream—a
                  real fantasy world! Choosing to start a new life, Kazuma is
                  quickly tasked with defeating a Demon King who is terrorizing
                  villages. But before he goes, he can choose one item of any
                  kind to aid him in his quest, and the future hero selects
                  Aqua. But Kazuma has made a grave mistake—Aqua is completely
                  useless!
                </p>
              </div>
              <div className="bg-orange-300 -mr-1 py-1 rounded pl-5 text-white -skew-x-12">
                Airing
              </div>
            </div>
          </div>
          <div className="border rounded-lg flex bg-white h-max overflow-hidden clip-right-bottom">
            <div className="h-max py-5 pl-5">
              <div className=" relative  border rounded-lg bg-gray-50 overflow-hidden  h-[200px] w-[100px]">
                <Image
                  alt="konosuba"
                  fill
                  src="/assets/konosuba.jpg"
                  className="object-cover h-full w-full "
                />
              </div>
            </div>
            <div>
              <div className="p-5">
                <h1 className="font-semibold text-lg mb-2">
                  {" "}
                  Kono Subarashii Sekai ni Shukufuku wo!
                </h1>
                <div className="flex items-center gap-x-1 mb-2">
                  <UserIcon className="h-4 w-4" />
                  <span className="text-gray-600 font-semibold text-sm">
                    250K
                  </span>
                </div>
                <div className="flex gap-x-2 mb-3">
                  <div className="bg-blue-50 w-max px-3 text-blue-700">
                    Action
                  </div>
                  <div className="bg-blue-50 w-max px-3 text-blue-700">
                    Comedy
                  </div>
                </div>
                <p className="scrollbar text-sm text-gray-800 overflow-auto h-32">
                  After dying a laughable and pathetic death on his way back
                  from buying a game, high school student and recluse Kazuma
                  Satou finds himself sitting before a beautiful but obnoxious
                  goddess named Aqua. She provides the NEET with two options:
                  continue on to heaven or reincarnate in every gamer's dream—a
                  real fantasy world! Choosing to start a new life, Kazuma is
                  quickly tasked with defeating a Demon King who is terrorizing
                  villages. But before he goes, he can choose one item of any
                  kind to aid him in his quest, and the future hero selects
                  Aqua. But Kazuma has made a grave mistake—Aqua is completely
                  useless!
                </p>
              </div>
              <div className="bg-pink-300 -mr-1 py-1 rounded pl-5 text-white -skew-x-12">
                Upcoming
              </div>
            </div>
          </div>
        </div>
        <div>
          <AdvancedFilter data={data} />
        </div>
      </div>
    </div>
  );
};

export default TrendingAnimes;
