import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const TrailerDetails = ({ animeData }: any) => {
  const [toggleTrailer, setToggleTrailer] = useState(false);
  const dynamicRoute = useRouter().asPath;
  useEffect(() => setToggleTrailer(false), [dynamicRoute]);

  if (animeData.data.trailer.url) {
    return (
      <div className="mt-5 ">
        <div>
          <h3 className="font-bold mb-3 text-lg  text-fuchsia-900">Trailer</h3>
          <div className="relative overflow-hidden aspect-[27/9] w-full">
            {toggleTrailer ? (
              <iframe
                src={animeData.data.trailer.embed_url}
                title="YouTube video player"
                allowFullScreen
                className="absolute h-full w-full rounded"
              ></iframe>
            ) : (
              <div
                onClick={() => setToggleTrailer(true)}
                className="cursor-pointer"
              >
                <Image
                  fill
                  src={animeData.data.trailer.images.maximum_image_url}
                  alt={animeData.title}
                  className="rounded-lg object-cover"
                />
                <div className="rounded-full p-5 absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 ">
                  <PlayIcon className="h-24 w-24 fill-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default TrailerDetails;
