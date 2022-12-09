import Image from "next/image";
import React from "react";
import ReactPaginate from "react-paginate";
import SkeletonLoader from "./SkeletonLoader";

const CategoryResults = ({
  fetchData,
  included,
  excluded,
  data,
  setData,
  loading,
}: any) => {
  const handlePageClick = async (page: any) => {
    let currentPage = page.selected + 1;
    fetchData(included, excluded, currentPage);
    console.log(currentPage);
  };
  console.log(data.data);
  return (
    <div className="w-full">
      <div className="grid grid-cols-10 gap-5 justify-center mb-5">
        {loading ? (
          <SkeletonLoader />
        ) : (
          data?.data?.map((anime: any) => {
            return (
              <div className="h-full w-full">
                <div className="relative h-full w-full" key={anime.mal_id}>
                  <Image
                    alt={"test"}
                    className="object-cover w-full h-full aspect-auto"
                    width={300}
                    height={300}
                    src={anime.images.webp.large_image_url}
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
      <ReactPaginate
        pageCount={data.pagination?.last_visible_page}
        previousLabel="<"
        nextLabel=">"
        pageRangeDisplayed={8}
        onPageChange={handlePageClick}
        containerClassName={"flex gap-x-2 items-center"}
        pageLinkClassName={
          "border rounded-lg px-2 hover:bg-blue-400 hover:text-white transition-all duration-100 ease-out"
        }
        previousClassName={
          "border rounded-lg px-2 hover:bg-blue-400 hover:text-white transition-all duration-100 ease-out"
        }
        nextClassName={
          "border rounded-lg px-2 hover:bg-blue-400 hover:text-white transition-all duration-100 ease-out"
        }
        activeClassName={"border-none rounded-lg px-2 bg-blue-400 text-white"}
        activeLinkClassName={"border-none"}
      />
    </div>
  );
};

export default CategoryResults;
