export function getWikipediaMobileUrl(url: string) {
  return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia') : '';
}

export function checkYear(year: string) {
  const currentYear = new Date().getFullYear();
  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    return String(currentYear);
  }
  return year;
}

export function checkRound(round: number) {
  if (round >= 100) {
    return 1;
  }
  return round;
}