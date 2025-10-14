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


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert2(intervals, newInterval) {
    const [newStart, newEnd] = newInterval;
    let start = -1;
    let end = -1;

    for (let i = 0; i < intervals.length; i++) {
        const [s, e] = intervals[i];
        
        if (start === -1 && e >= newStart) {
            start = i;
        }
        
        if (s <= newEnd) {
            end = i;
        }
    }

    return [
        ...intervals.slice(0, start > -1 ? start : intervals.length),
        [Math.min(intervals[start]?.[0] ?? Infinity, newStart), Math.max(intervals[end]?.[1] ?? -Infinity, newEnd)],
        ...intervals.slice(end + 1)
    ];
};