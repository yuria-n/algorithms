/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function (arr) {
  const set = new Set(arr);
  return arr.reduce((res, n) => res + ~~set.has(n + 1), 0);
};

const countElements = function (arr) {
  const max = 1001;
  const counts = new Array(max).fill(0);
  for (const i of arr) {
    counts[i]++;
  }
  let result = 0;
  for (let i = 0; i < max - 1; i++) {
    result += counts[i + 1] ? counts[i] : 0;
  }
  return result;
};

const countElements = function (arr) {
  const map = new Map();
  for (const n of arr) {
    map.set(n, ++map.get(n) || 1);
  }
  let result = 0;
  for (const n of arr) {
    result += map.has(n + 1) ? map.get(n) : 0;
    map.set(n, 0);
  }
  return result;
};
