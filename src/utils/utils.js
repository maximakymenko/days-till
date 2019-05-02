export const createImageLink = path => (path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${path}` : null);

export function truncate(str, maxLength) {
  return str.length > maxLength
    ? `${str.substring(0, maxLength)}...`
    : str;
}
