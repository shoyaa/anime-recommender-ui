import React, { useState } from "react";
import { isTemplateExpression } from "typescript";
type checkBoxProps = {
  item: any;
  setFilteredAnime: any;

  filteredAnime: any;
};
const CheckboxBtn = ({
  item,
  setFilteredAnime,
  filteredAnime,
}: checkBoxProps) => {
  const [status, setStatus] = useState<string>("neutral");
  const [buttonStyle, setButtonStyle] = useState<string>(" bg-gray-200 border");

  const handleClick = (id: number) => {
    switch (status) {
      case "neutral":
        console.log("neutral");
        setStatus("included");
        setButtonStyle(" bg-black text-white border-transparent border");
        const includedData = [...filteredAnime].map((item: any) => {
          if (item.mal_id === id) {
            return {
              ...item,
              status: "included",
            };
          }
          return item;
        });
        setFilteredAnime(includedData);
        break;

      case "included":
        console.log("included oldu");
        setStatus("excluded");
        setButtonStyle(" bg-gray-200 border border-transparent text-gray-400");
        const excludedData = [...filteredAnime].map((item: any) => {
          if (item.mal_id === id) {
            return {
              ...item,
              status: "excluded",
            };
          }
          return item;
        });
        setFilteredAnime(excludedData);
        break;
      case "excluded":
        console.log("neutral oldu");
        setStatus("neutral");
        setButtonStyle(" bg-gray-200 border border-transparent");

        const neutralData = [...filteredAnime].map((item: any) => {
          if (item.mal_id === id) {
            return {
              ...item,
              status: "neutral",
            };
          }
          return item;
        });
        setFilteredAnime(neutralData);
        break;
    }
  };

  return (
    <div
      key={item.id}
      onClick={() => {
        handleClick(item.mal_id);
      }}
      className={`${buttonStyle}  rounded-full px-3 cursor-pointer select-none transition-all duration-300 ease-out`}
    >
      {item.name}
    </div>
  );
};

export default CheckboxBtn;
