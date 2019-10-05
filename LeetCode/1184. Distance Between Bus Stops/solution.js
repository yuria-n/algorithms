/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function(distance, start, destination) {
  const l = distance.length;
  const large = Math.max(start, destination);
  const small = Math.min(start, destination);

  let clockwise = 0;
  for (let i = small; i < large; i++) {
    const n = i % l;
    clockwise += distance[n];
  }
  let antiClockwise = 0;
  for (let i = large; i < l + small; i++) {
    const n = i % l;
    antiClockwise += distance[n];
  }
  return Math.min(clockwise, antiClockwise);
};

const distanceBetweenBusStops = function(distance, start, destination) {
  const min = Math.min(start, destination);
  const max = Math.max(start, destination);

  let clockwise = 0;
  let antiClockwise = 0;
  for (let i = 0; i < distance.length; i++) {
    const n = distance[i];
    if (i >= min && i < max) {
      clockwise += n;
    } else {
      antiClockwise += n;
    }
  }

  return Math.min(clockwise, antiClockwise);
};
