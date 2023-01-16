import Image from "next/image";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import AdvancedFilter from "./AdvancedFilter";
const Hero = ({ data }: any) => {
  return (
    <div className="w-full  h-[55vh] relative rounded-lg ">
      <div className="h-full w-full absolute rounded-lg overflow-hidden object-cover ">
        <Image
          priority
          alt="hero image"
          fill
          src="/assets/wallhaven-y851p7.jpg"
          className="object-cover brightness-[.3] rounded-lg "
        />
      </div>
      <div className="relative flex flex-col h-full pt-3 px-10 ">
        <form className="w-full border shadow-xl bg-white flex rounded-lg focus:border-2">
          <input
            placeholder="Enter the name of the anime you wish to find."
            className="pl-5 py-2  w-full  rounded-lg outline-none"
            type="text"
          />
          <button className="bg-fuchsia-700 rounded-lg mr-1 px-4 py-1 text-white">
            Search
          </button>
        </form>
        <div className="text-white h-full  mb-4 justify-end flex flex-col ">
          <div className="">
            <h2 className="text-lg bg-fuchsia-100 text-fuchsia-700	 w-max px-2 py-1 rounded-lg">
              Anime of The Day #23
            </h2>
            <div className=" text-white w-1/2 pb-12">
              <div>
                <h1 className="  text-5xl my-4 font-extrabold ">
                  Kono Subarashii Sekai ni Shukufuku wo!
                </h1>
                <p className=" leading-relaxed  ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
