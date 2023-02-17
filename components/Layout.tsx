import React from "react";
import Navbar from "./Navbar/Navbar";
import Searchbar from "./Navbar/Searchbar";

type Props = {
  children: React.ReactNode;
  data: any;
};
const Layout = ({ children, data, include, exclude }: any) => {
  return (
    <>
      <div className="flex flex-row ">
        <Navbar />
        <main className="w-full h-full flex flex-col transition-all duration-300 ease-out dark:bg-gray-800 bg-[#fafafa]">
          <Searchbar data={data} include={include} exclude={exclude} />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
