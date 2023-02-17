import React from "react";

const SkeletonLoader = () => {
  return (
    <div
      className={`animate-scaleOut animate-fadeInFast border-gray-300 border-2 w-full  rounded-lg pulse grid grid-cols-[185px,auto] h-[265px] min-w-full   bg-white  overflow-hidden   shadow-lg `}
    >
      <div className="">
        <div className=" relative   z-10 bg-gray-200 animate-pulse overflow-hidden  h-full w-full"></div>
      </div>
      <div className="flex flex-col px-2 space-y-2 animate-pulse pt-2">
        <div className="h-5 w-full bg-gray-300  rounded-lg"></div>
        <div className="h-5 w-3/4 bg-gray-300 rounded-lg"></div>
        <div className="h-5 w-2/4 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
