import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { animeType } from "../../constants";

const FilterType = ({ active, handleClick, setTypeQuery, typeQuery }: any) => {
  const handleOptionChange = (event: any) => {
    setTypeQuery(event.target.value);
  };
  return (
    <div
      className={` py-2 border dark:border-gray-700 px-2  mb-3 select-none dark:bg-gray-700`}
    >
      <div
        onClick={() => handleClick(2)}
        className="flex items-center justify-between pl-2"
      >
        <span>Type</span>
        <ChevronDownIcon
          className={`${
            active === 2 ? "-rotate-180" : "rotate-0"
          } duration-500 transition-all  h-6 w-6 fill-fuchsia-500`}
        />
      </div>
      <div
        className={`${
          active === 2 ? "block" : "hidden"
        } transition-all duration-200`}
      >
        <div className={` h-52 overflow-auto  `}>
          <ul className=" p-2">
            {animeType.map((item: any) => {
              return (
                <li key={item}>
                  <input
                    onChange={handleOptionChange}
                    checked={typeQuery === item}
                    value={item}
                    type="radio"
                    className="duration-300 ease-out transition-all text-green-500 focus:ring-green-500 mr-1"
                  />{" "}
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterType;
