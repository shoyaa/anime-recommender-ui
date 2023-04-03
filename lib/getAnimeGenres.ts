export const getAnimeGenres = async () => {
  const res = await fetch(`http://193.123.33.166/genres`);

  const data = await res.json();
  return data;
};
