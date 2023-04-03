import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { animeStatus } from "../../lib/constants";

const FilterStatus = ({
  active,
  handleClick,
  setStatusQuery,
  statusQuery,
}: any) => {
  const handleOptionChange = (event: any) => {
    setStatusQuery(event.target.value);
  };

  return (
    <div
      className={`py-2 border dark:border-gray-700 px-2  mb-3 select-none dark:bg-gray-700 text-sm lg:text-base`}
    >
      <div
        onClick={() => handleClick(3)}
        className="flex items-center justify-between pl-2"
      >
        <span>Status</span>
        <ChevronDownIcon
          className={`${
            active === 3 ? "-rotate-180" : "rotate-0"
          } duration-500 transition-all  h-6 w-6 fill-fuchsia-500`}
        />
      </div>
      <div
        className={`${
          active === 3 ? "block" : "hidden"
        } transition-all duration-200`}
      >
        <div className={` h-52 overflow-auto  `}>
          <ul className="p-2">
            {animeStatus.map((item: any) => {
              return (
                <li key={item}>
                  <input
                    onChange={handleOptionChange}
                    checked={statusQuery === item}
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

export default FilterStatus;
