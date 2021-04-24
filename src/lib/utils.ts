export function getWikipediaMobileUrl(url: string) {
  return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia') : '';
}