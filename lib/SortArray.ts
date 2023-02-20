export const sortArray = (array: any) => {
  const sortedArray = array.sort(function (a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
};

export const sortByFavorites = (array: any) => {
  const sortedArray = array.sort(function (a: any, b: any) {
    if (a.favorites < b.favorites) {
      return -1;
    }
    if (a.favorites > b.favorites) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
};
