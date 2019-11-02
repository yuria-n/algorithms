/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
const circularPermutation = function(num, start) {
  const arr = [];
  for (let i = 0; i < 2 ** num; i++) {
    arr.push(i ^ (i >> 1));
  }
  const s = arr.findIndex(n => n === start);
  return [...arr.slice(s), ...arr.slice(0, s)];
};
