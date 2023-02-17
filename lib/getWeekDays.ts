export function getWeekDays(start = new Date(), datesArray: any) {
  for (let i = 0; i < 7; i++) {
    const startDay = start.getDay() === 0 ? 7 : start.getDay();
    const day = start.setDate(start.getDate() - startDay + i + 1);
    datesArray.push(new Date(day).toISOString().slice(0, 10));
  }
}
