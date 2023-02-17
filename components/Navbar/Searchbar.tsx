import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import AdvancedFilter from "../AdvancedFilter/AdvancedFilter";

const Searchbar = ({ data, include, exclude }: any) => {
  const [modalState, setModalState] = useState(false);

  const handleClick = (event: any) => {
    setModalState(!modalState);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setModalState(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div ref={dropdownRef} className="ml-2 md:ml-10 my-5 relative ">
      {" "}
      <form className="relative w-max    flex  ">
        <input
          placeholder="Search everything..."
          className="px-9 py-2 w-64  border-2 border-gray-400 dark:bg-gray-700 rounded-full outline-none"
          type="text"
        />
        <div className=" rounded-lg absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </div>
        <div
          onClick={handleClick}
          className="cursor-pointer rounded-lg absolute top-1/2 right-3 transform hover:bg-gray-300 duration-300 ease-out -translate-y-1/2 h-5 w-5"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
        </div>
      </form>
      <div className={`${modalState ? "absolute" : "hidden"} top-14 z-50`}>
        <div>
          <AdvancedFilter data={data} include={include} exclude={exclude} />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
