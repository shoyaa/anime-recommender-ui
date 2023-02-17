export const stringToNum = (array: string) => {
  const stringToArray = array.split(",");
  const arrayOfNumbers = stringToArray.map((str) => Number(str));

  return arrayOfNumbers;
};
