import React from "react";

const SynopsisDetails = ({ animeData }: any) => {
  return (
    <div className="mt-5 mb-5 lg:mt-0 text-xs md:text-base lg:text-base font-semibold text-gray-900 bg-gray-200 p-2 lg:p-3 rounded-lg">
      <h3 className="text-lg font-bold text-fuchsia-900">Synopsis</h3>
      {animeData?.data.synopsis}
    </div>
  );
};

export default SynopsisDetails;
