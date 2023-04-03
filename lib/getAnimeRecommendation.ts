export const getAnimeRecommendation = async (context: any) => {
  const search = context.query.query;
  const searchParams = new Proxy(new URLSearchParams(search), {
    get: (params: any, prop: string) => params.get(prop),
  });
  const include = searchParams.include ? `include=${searchParams.include}` : "";
  const exclude = searchParams.include ? `exclude=${searchParams.exclude}` : "";
  const status = searchParams.status ? `status=${searchParams.status}` : "";
  const type = searchParams.type ? `type=${searchParams.type}` : "";

  //Get every params from the url to make query to api.
  const query = `http://193.123.33.166/genre-recommendation?${include}&${exclude}&${status}&${type}`;

  const req = await fetch(query);
  const recommendationData = await req.json();
  return { recommendationData, query };
};
