import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { animeStatus, animeType } from "../constants";
const AdvancedFilter = ({ data }: any) => {
  const [active, setActive] = useState(null);
  const handleClick = (index: any) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="px-5 py-5 shadow-lg bg-white rounded-lg ml-auto w-96 relative select-none ">
      <div className="ml-2 mb-3">
        <h2 className=" text-md font-bold text-gray-600">Advanced Search</h2>
      </div>

      <div
        onClick={() => handleClick(1)}
        className={`${
          active === 1 ? "bg-fuchsia-100" : null
        } py-2 border px-2  mb-3 select-none`}
      >
        <div className="flex items-center justify-between">
          <span>Genre</span>
          <ChevronDownIcon
            className={`${
              active === 1 ? "-rotate-180" : "rotate-0"
            } duration-500 transition-all  h-6 w-6 fill-fuchsia-500`}
          />
        </div>
      </div>
      <div
        className={`${
          active === 1 ? "block" : "hidden"
        } transition-all duration-200`}
      >
        <div className="pb-2 px-2">
          <input
            type="text"
            className="w-full border text-xs py-1 pl-2 font-light"
            placeholder="type to filter genre"
          />
        </div>
        <div className={`px-2 h-52 overflow-auto  `}>
          <ul className="border-t p-2">
            {data.map((item: any) => {
              return (
                <li>
                  <input type="checkbox" /> {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        onClick={() => handleClick(2)}
        className={`${
          active === 2 ? "bg-fuchsia-100" : null
        } py-2 border px-2  mb-3 select-none`}
      >
        <div className="flex items-center justify-between">
          <span>Type</span>
          <ChevronDownIcon
            className={`${
              active === 2 ? "-rotate-180" : "rotate-0"
            } duration-500 transition-all  h-6 w-6 fill-fuchsia-500`}
          />
        </div>
      </div>
      <div
        className={`${
          active === 2 ? "block" : "hidden"
        } transition-all duration-200`}
      >
        <div className={`px-2 h-52 overflow-auto  `}>
          <ul className="border-t p-2">
            {animeType.map((item: any) => {
              return (
                <li>
                  <input type="checkbox" /> {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        onClick={() => handleClick(3)}
        className={`${
          active === 3 ? "bg-fuchsia-100" : null
        } py-2 border px-2  mb-3 select-none`}
      >
        <div className="flex items-center justify-between">
          <span>Status</span>
          <ChevronDownIcon
            className={`${
              active === 3 ? "-rotate-180" : "rotate-0"
            } duration-500 transition-all  h-6 w-6 fill-fuchsia-500`}
          />
        </div>
      </div>
      <div
        className={`${
          active === 3 ? "block" : "hidden"
        } transition-all duration-200`}
      >
        <div className={`px-2 h-52 overflow-auto  `}>
          <ul className="border-t p-2">
            {animeStatus.map((item: any) => {
              return (
                <li>
                  <input type="checkbox" /> {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        onClick={() => handleClick(4)}
        className={`${
          active === 4 ? "bg-fuchsia-100" : null
        } py-2 border px-2  mb-3 select-none`}
      >
        <div className="flex items-center justify-between">
          <span>Score</span>
          <ChevronDownIcon
            className={`${
              active === 4 ? "-rotate-180" : "rotate-0"
            } duration-500 transition-all  h-6 w-6 fill-fuchsia-500`}
          />
        </div>
      </div>
      <div className="flex gap-x-2 mt-10 ">
        <button className="bg-fuchsia-700 p-3 text-white  rounded-lg">
          Search
        </button>
        <button className="p-3 border  rounded-lg"> Clear Filters </button>
      </div>
      {/*
       */}
    </div>
  );
};

export default AdvancedFilter;
