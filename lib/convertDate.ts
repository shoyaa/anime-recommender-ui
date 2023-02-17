export const convertDate = (date: string) => {
  const now = new Date(date);

  const hoursAndMinutes = now.toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return hoursAndMinutes;
};
