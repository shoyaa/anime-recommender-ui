import React from "react";

const DetailsSidebar = ({ animeData }: any) => {
  return (
    <div className="self-start  bg-gray-200 p-3 rounded text-sm lg:space-y-2 flex lg:block overflow-auto gap-x-6 items-center whitespace-nowrap ">
      <div>
        <div className="font-semibold">Format</div>
        <div>{animeData?.data.type}</div>
      </div>
      <div>
        <div className="font-semibold">Episodes</div>
        <div>
          {animeData?.data.episodes ? animeData?.data.episodes : "Unknown"}
        </div>
      </div>
      <div>
        <div className="font-semibold">Episode Duration</div>
        <div>{animeData?.data.duration}</div>
      </div>
      <div>
        <div className="font-semibold">Start Date</div>
        <div>
          {new Date(animeData?.data.aired.from).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      <div>
        <div className="font-semibold">End Date</div>
        <div>
          {animeData?.data.duration.to
            ? new Date(animeData?.data.aired.to).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Ongoing"}
        </div>
      </div>
      <div>
        <div className="font-semibold">Favorites</div>
        <div>{animeData?.data.favorites}</div>
      </div>
      <div>
        <div className="font-semibold">Producers</div>
        <ul className="flex gap-x-3 lg:block">
          {animeData?.data.producers.map((producer: any) => {
            return <li key={producer.name}>{producer.name} </li>;
          })}
        </ul>
      </div>
      <div>
        <div className="font-semibold">Source</div>
        <div>{animeData?.data.source}</div>
      </div>
      <div>
        <div className="font-semibold">Genres</div>
        <ul className="flex items-center lg:block gap-x-2">
          {animeData?.data.genres.map((genre: any) => {
            return <li key={genre.name}>{genre.name} </li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DetailsSidebar;
