import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="change theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-900  w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer font-base text-xl"
    >
      {theme === "light" ? (
        <MoonIcon className="h-7 w-7 md:h-6 md:w-6 mr-1" />
      ) : (
        <SunIcon className="h-7 w-7 md:h-6 md:w-6 mr-1" />
      )}
      <span className="hidden md:block"> Theme</span>
    </button>
  );
};

export default ThemeButton;
