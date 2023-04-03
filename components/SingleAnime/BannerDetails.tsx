import Image from "next/image";
import React from "react";

const BannerDetails = ({ animeData }: any) => {
  return (
    <div className="absolute h-[18rem] top-0 w-full overflow-hidden">
      <Image
        className="h-[18rem] w-full absolute object-cover blur-sm brightness-50"
        src={animeData.data.images.jpg.large_image_url}
        alt="hehe"
        width={1920}
        height={1080}
        priority
      />
    </div>
  );
};

export default BannerDetails;
