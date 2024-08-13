/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const [newStart, newEnd] = newInterval;
    const [curStart, curEnd] = intervals[i];
    if (newEnd < curStart) {
      result.push(newInterval);
      return [...result, ...intervals.slice(i)];
    }
    if (newStart > curEnd) {
      result.push(intervals[i]);
      continue;
    }
    newInterval = [Math.min(newStart, curStart), Math.max(newEnd, curEnd)];
  }
  result.push(newInterval);
  return result;
}
