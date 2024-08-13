/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  intervals.sort(([, endA], [, endB]) => endA - endB);

  let prevEnd = -Infinity;
  let count = 0;
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (prevEnd === end || prevEnd > start) {
      count++;
      continue;
    }
    prevEnd = end;
  }

  return count;
}
