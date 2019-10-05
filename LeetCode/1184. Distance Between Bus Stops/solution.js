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
