import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-full  h-[55vh] relative rounded-lg mx-2 md:mx-10 select-none ">
      <div className="h-full w-full absolute rounded-lg overflow-hidden object-cover ">
        <Image
          priority
          alt="hero image"
          fill
          src="/assets/wallhaven-y851p7.jpg"
          className="object-cover brightness-75 rounded-lg "
        />
      </div>
    </div>
  );
};

export default Hero;
