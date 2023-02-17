export const getWeekNumber = () => {
  const now = new Date();
  const onejan = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(
    ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
  );
  return week;
};

export function getDaysInWeek(weekNumber: number, year: number) {
  const startDate = new Date(year, 0, 1);
  const dayMilliseconds = 24 * 60 * 60 * 1000;
  const firstDayOfYear = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1; // 0 for Sunday, 6 for Saturday
  const daysSinceFirstDay = (weekNumber - 1) * 7 + (7 - firstDayOfYear) + 1;
  const firstDayOfWeek = new Date(year, 0, daysSinceFirstDay);

  const days = [];
  const options: any = { weekday: "short", month: "short", day: "numeric" };
  for (let i = 0; i < 7; i++) {
    const day = new Date(firstDayOfWeek.getTime() + i * dayMilliseconds);
    days.push(day.toLocaleDateString("en-US", options));
  }

  return days;
}
