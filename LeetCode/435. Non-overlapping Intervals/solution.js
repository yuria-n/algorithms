/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  intervals.sort(([, endA], [, endB]) => endA - endB);

  let prevEnd = -Infinity;
  let count = 0;
  for (const [start, end] of intervals) {
    if (prevEnd > start) {
      count++;
      continue;
    }
    prevEnd = end;
  }

  return count;
}
