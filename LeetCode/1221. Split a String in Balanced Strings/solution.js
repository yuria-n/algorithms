/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let count = 0;
  let cur = 0;
  for (const str of s) {
    cur += str === 'L' ? 1 : -1;
    count += !cur ? 1 : 0;
  }
  return count;
};
