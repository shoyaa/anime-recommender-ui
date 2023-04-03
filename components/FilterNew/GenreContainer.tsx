import React from "react";
type Props = {
  children?: JSX.Element;
};
const GenreContainer = ({ children }: Props) => {
  return <div className="flex mt-2">{children}</div>;
};

export default GenreContainer;
