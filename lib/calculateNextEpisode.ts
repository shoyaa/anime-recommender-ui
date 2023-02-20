export function addDays(date: any, days: any) {
  date.setDate(date.getDate() + days);
  return date;
}

export function CalculateDays(airingDate: any, episodeNumber: any) {
  const today: any = new Date();
  let nextEpisode = episodeNumber;

  if (airingDate < today) {
    addDays(airingDate, 7);
    nextEpisode++;
  }

  var seconds = Math.floor((airingDate - today) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  return (
    "EP " +
    nextEpisode +
    ": " +
    days +
    " Days " +
    hours +
    " Hours " +
    minutes +
    " Minutes "
  );
}
