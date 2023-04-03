import React from "react";
import { CalculateDays } from "../../lib/calculateNextEpisode";

const EpisodeCountdown = ({ selectedDate, animeData }: any) => {
  if (animeData?.data.airing) {
    return (
      <div className="bg-gradient-to-r from-violet-300 to-violet-400 shadow-glow   shadow-violet-400  lg:mb-3 p-3 rounded text-xs font-semibold text-white ">
        <span className="block">Currently Airing</span>

        {CalculateDays(
          new Date(selectedDate[0]?.episodeDate),
          selectedDate[0]?.episodeNumber
        )}
      </div>
    );
  } else return null;
};

export default EpisodeCountdown;
