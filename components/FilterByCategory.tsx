import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import CheckboxBtn from "./CheckboxBtn";
import { AnimatePresence, motion } from "framer-motion";
import SkeletonLoader from "./SkeletonLoader";
import CategoryResults from "./CategoryResults";

const FilterByCategory = ({ anime }: any) => {
  type categoryProps = {
    mal_id: number;
    name: string;
    url: string;
    status?: string;
    count: number;
  }[];
  const [filteredAnime, setFilteredAnime] = useState<categoryProps>(anime);
  const [included, setIncluded] = useState<any>([]);
  const [excluded, setExcluded] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const myRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () =>
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    setFilteredAnime(
      anime.map((v: categoryProps) => ({
        ...v,
        status: "neutral",
      }))
    );
  }, []);

  useEffect(() => {
    setIncluded(
      filteredAnime
        .filter((item: any) => {
          return item.status === "included";
        })
        .map((item: any) => {
          return item.mal_id;
        })
        .toString()
    );
    setExcluded(
      filteredAnime
        .filter((item) => {
          return item.status === "excluded";
        })
        .map((item) => {
          return item.mal_id;
        })
        .toString()
    );
  }, [filteredAnime]);

  const handleSubmit = () => {
    fetchData(included, excluded, 1);
    executeScroll();
  };
  const fetchData = async (
    included: string,
    excluded: string,
    page: number
  ) => {
    if (included.length > 0 && excluded.length > 0) {
      setLoading(true);
      const req = await fetch(
        `http://193.123.33.166/genre-recommendation?include=${included}&exclude=${excluded}&page=${page}`
      );
      const newData = await req.json();
      setLoading(false);
      return setData(newData);
    }
    if (included.length > 0 && excluded.length === 0) {
      setLoading(true);
      const req = await fetch(
        `http://193.123.33.166/genre-recommendation?include=${included}&exclude&page=${page}`
      );
      const newData = await req.json();
      setLoading(false);
      return setData(newData);
    }
    if (included.length === 0 && excluded.length > 0) {
      setLoading(true);
      const req = await fetch(
        `http://193.123.33.166/genre-recommendation?include&exclude=${excluded}&page=${page}`
      );
      const newData = await req.json();
      setLoading(false);
      return setData(newData);
    } else return;
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-4xl pt-5">
        <div>
          <h3 className="text-lg font-bold">Content Filter</h3>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold">Genres</h3>
          <div className="flex items-center mt-5">
            <div className="bg-blue-200  w-max rounded-md pl-2 pr-5 py-2 flex items-center">
              <InformationCircleIcon className="h-5 w-5 mr-1 fill-blue-800" />
              <span className=" text-blue-800   ">
                Click one to include and twice to exclude
              </span>
            </div>
            <div className="ml-auto mr-3">Clear all</div>
          </div>
          <div className="grid grid-cols-5 gap-3 mt-5">
            {filteredAnime.slice(0, 20).map((item: any) => {
              return (
                <CheckboxBtn
                  setFilteredAnime={setFilteredAnime}
                  filteredAnime={filteredAnime}
                  item={item}
                  key={item.mal_id}
                />
              );
            })}
          </div>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                      delay: 0.15,
                    },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                    },
                  },
                }}
                className="grid grid-cols-5 gap-3"
              >
                {filteredAnime.slice(20).map((item: any) => {
                  return (
                    <CheckboxBtn
                      setFilteredAnime={setFilteredAnime}
                      filteredAnime={filteredAnime}
                      item={item}
                      key={item.mal_id}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
          <div
            className="mt-10 flex items-center w-full justify-center gap-x-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDownIcon className="h-5 w-5" />
            <span>See more</span>
          </div>

          <div className="w-full text-center mt-10 mb-5">
            <button
              onClick={handleSubmit}
              className="px-28  py-3 rounded-full bg-gray-300 "
            >
              {" "}
              Search
            </button>
          </div>
          <h3 className="text-xl font-bold mt-20 mb-5">Matched Results</h3>
          <div ref={myRef} className="w-full flex justify-center">
            <CategoryResults
              fetchData={fetchData}
              included={included}
              excluded={excluded}
              setData={setData}
              data={data}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterByCategory;
