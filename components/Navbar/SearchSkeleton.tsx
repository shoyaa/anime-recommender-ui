import React from "react";

const SearchSkeleton = () => {
  return (
    <div
      className={`animate-in fade-in  w-full  pulse flex items-center  overflow-hidden p-2 border-b `}
    >
      <div className="">
        <div className=" relative   z-10 bg-gray-200 animate-pulse overflow-hidden  h-12 w-8"></div>
      </div>

      <div className="pulse mx-3 h-5 w-full  bg-gray-200 rounded-lg"></div>
    </div>
  );
};

export default SearchSkeleton;
