/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = seats => {
  let result = 0;
  let i = -1;
  let j = seats.length;
  let n = 0;

  while (!seats[++i]) {
    result = Math.max(result, ++n);
  }

  n = 0;
  while (!seats[--j]) {
    result = Math.max(result, ++n);
  }

  n = 0;
  while (i < j) {
    if (seats[i++]) {
      n = 0;
      continue;
    }
    result = Math.max(result, Math.floor((++n + 1) / 2));
  }

  return result;
};
