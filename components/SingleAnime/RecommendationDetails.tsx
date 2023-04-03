import Image from "next/image";
import React from "react";

const RecommendationDetails = ({ recommendations }: any) => {
  return (
    <div className=" mt-5 ">
      <div>
        <h3 className="font-bold mb-3 text-lg text-fuchsia-900 ">
          Recommendations
        </h3>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-x-6 gap-y-6">
          {recommendations.map((item: any) => (
            <div key={item.entry.title}>
              <div className="relative w-full pb-64">
                <Image
                  src={item.entry.images.jpg.large_image_url}
                  alt={item.entry.title}
                  className="object-cover rounded"
                  fill
                />
              </div>
              <div className="text-center line-clamp-1 text-sm font-semibold">
                {" "}
                {item.entry.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationDetails;
