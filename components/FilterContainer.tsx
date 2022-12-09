import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import FilterByCategory from "./FilterByCategory";
import FilterBySearch from "./FilterBySearch";
const FilterContainer = ({ anime }: any) => {
  const [option, setOption] = useState<Number>(1);

  const renderCurrentOption = () => {
    switch (option) {
      case 1:
        return <FilterByCategory anime={anime} />;
      case 2:
        return <FilterBySearch />;
      default:
        return null;
    }
  };
  return (
    <div className="mt-9 mb-24 min-h-[1000px]">
      <div className="container mx-auto">
        <ul className="border-b flex gap-x-5 justify-center">
          <li
            onClick={() => {
              setOption(1);
            }}
            className={`${
              option === 1 ? "border-b-4 border-black font-bold " : null
            }  cursor-pointer`}
          >
            Option 1
          </li>
          <li
            onClick={() => {
              setOption(2);
            }}
            className={`${
              option === 2 ? "border-b-4 border-black font-bold " : null
            }  cursor-pointer`}
          >
            Option 2
          </li>
          <li className="cursor-pointer">Option 3</li>
        </ul>
        <AnimatePresence mode="wait" initial={false}>
          {renderCurrentOption()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FilterContainer;
