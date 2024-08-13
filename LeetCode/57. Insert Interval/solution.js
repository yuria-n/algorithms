/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  let startIndex = -1;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[0]) {
      break;
    }
    startIndex = i;
  }

  let endIndex = -1;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[1]) {
      break;
    }
    endIndex = i;
  }

  if (startIndex === -1 && endIndex === -1) {
    intervals.unshift(newInterval);
    return intervals;
  }

  if (
    startIndex === endIndex &&
    startIndex === intervals.length - 1 &&
    newInterval[0] > intervals[startIndex][1] &&
    newInterval[1] > intervals[startIndex][1]
  ) {
    intervals.push(newInterval);
    return intervals;
  }

  if (
    intervals[startIndex]?.[1] < newInterval[0] &&
    intervals[startIndex + 1]?.[0] > newInterval[0]
  ) {
    startIndex++;
  }

  const x = Math.min(intervals[startIndex]?.[0] ?? Infinity, newInterval[0]);
  const y = Math.max(intervals[endIndex]?.[1] ?? -Infinity, newInterval[1]);
  return [
    ...intervals.slice(0, Math.max(startIndex, 0)),
    [x, y],
    ...intervals.slice(endIndex + 1),
  ];
}
