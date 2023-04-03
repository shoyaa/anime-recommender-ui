import React from "react";

const Highlight = ({ text, match }: any) => {
  let regex = new RegExp(`(${match}+)`, "gi");
  let parts = text.split(regex);
  return parts.map((part: any, index: number) =>
    regex.test(part) ? (
      <b key={index}>{part}</b>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

export default Highlight;
