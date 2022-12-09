import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { motion } from "framer-motion";
const FilterBySearch = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto pt-5 ">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 border border-gray-400 rounded-full placeholder:text-gray-700 outline-none focus:shadow-xl focus:border-blue-700 transition-all duration-300 ease-out placeholder:font-bold ring-transparent focus:ring-transparent pl-6 placeholder:leading-[48px] h-12 w-full"
        />
        <div className="mt-5">
          <h3 className="font-bold text-xl">Selected Series</h3>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-200  w-max rounded-md pl-2 pr-5 py-2 flex items-center mt-5">
            <InformationCircleIcon className="h-5 w-5 mr-1 fill-blue-800" />
            <span className=" text-blue-800   ">
              Selected series will appear as you choose from below.
            </span>
          </div>
          <div className="ml-auto">Clear All</div>
        </div>
        <div className="grid grid-cols-4 gap-x-4 mt-5">
          <img className="rounded-lg" src={"/cover.jpg"} />
          <img className="rounded-lg" src={"/cover.jpg"} />
          <img className="rounded-lg" src={"/cover.jpg"} />
          <img className="rounded-lg" src={"/cover.jpg"} />
        </div>
        <div className="w-full text-center mt-10 mb-5">
          <button className="px-28  py-3 rounded-full bg-gray-300 ">
            {" "}
            Search
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterBySearch;
