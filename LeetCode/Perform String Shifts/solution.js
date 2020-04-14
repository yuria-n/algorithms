/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = function (s, shift) {
  let count = 0;
  for (const [d, i] of shift) {
    count += d ? i : -i;
  }
  const i = (s.length - count) % s.length;
  return s.slice(i) + s.slice(0, i);
};
