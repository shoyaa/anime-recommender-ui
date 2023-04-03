import fetcher from "./fetcher";

export const sortArray = (array: [], key: string) => {
  const sortedArray = array.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
};

export const sortByFavorites = (array: any) => {
  if (!array) {
    return;
  }
  const sortedArray = array.sort(function (a: any, b: any) {
    if (a.favorites < b.favorites) {
      return 1;
    }
    if (a.favorites > b.favorites) {
      return -1;
    }
    return 0;
  });
  return sortedArray;
};

export const fetchAndSort = async (url: string, param: string) => {
  const data = await fetcher(url);
  const sortedData = sortArray(data, param);
  return sortedData;
};
