export const getAnimeRecommendation = async (context: any) => {
  const search = context.query.query;
  const searchParams = new Proxy(new URLSearchParams(search), {
    get: (params: any, prop: string) => params.get(prop),
  });
  const include = searchParams.include ? `genres=${searchParams.include}` : "";
  const exclude = searchParams.include
    ? `genres_exclude=${searchParams.exclude}`
    : "";
  const status = searchParams.status ? `&status=${searchParams.status}` : "";
  const type = searchParams.type ? `type=${searchParams.type}&` : "";

  //Get every params from the url to make query to api.
  const query = `${process.env.ANIME_BASE_URL}/anime?${include}&${exclude}${status}&${type}order_by=members&sort=desc`;

  const req = await fetch(query);
  const recommendationData = await req.json();

  return recommendationData;
};
