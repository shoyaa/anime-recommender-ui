import Link from "next/link";
import React, { useState } from "react";
import { navlinks } from "../constants";
import { logo, sun } from "../public/assets";

type IconProps = {
  styles?: string;
  name?: string;
  imgUrl?: string;
  isActive?: string;
  disabled?: boolean;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};
const Icon = ({
  styles,
  name,
  imgUrl,
  isActive,
  disabled,
  handleClick,
}: IconProps) => {
  return (
    <div
      className={`w-[48px] h-[48px] hover:bg-gray-400 transition-all duration-200 ease-out rounded-[10px] ${
        isActive && isActive === name && "bg-black"
      } flex justify-center items-center ${
        !disabled && "cursor-pointer"
      } ${styles}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className={`h-full w-full `} />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`h-full w-full  ${isActive !== name && " "}`}
        />
      )}
    </div>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
        <Icon
          styles={`w-[52px] h-[52px] bg-gray-300 `}
          imgUrl={"./assets/logo.svg"}
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-gray-300 rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-6">
          {navlinks.map((link) => (
            <Link href={link.link}>
              <Icon
                key={link.name}
                imgUrl={"./assets/" + link.name + ".svg"}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                  }
                }}
              />
            </Link>
          ))}
        </div>

        <Icon styles=" shadow-secondary" imgUrl="./assets/sun.svg" />
      </div>
    </div>
  );
};

export default Navbar;
