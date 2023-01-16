import React from "react";

const Category = ({ anime }: any) => {
  console.log(anime.data);
  return <div>Category</div>;
};

export default Category;
export async function getServerSideProps(context: any) {
  const search = context.query.slug;
  const searchParams = new Proxy(new URLSearchParams(search), {
    get: (params: any, prop: string) => params.get(prop),
  });

  const req = await fetch(
    `http://193.123.33.166/genre-recommendation?include=${
      searchParams.include
    }&exclude=${searchParams.exclude}&page=${searchParams.page}${
      searchParams.query || ""
    }`
  );

  const data = await req.json();
  return {
    props: { anime: data }, // will be passed to the page component as props
  };
}
