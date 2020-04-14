/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = function (s, shift) {
  let c = shift.reduce((sum, [d, i]) => (sum += d ? i : -i), 0);
  const i = (s.length - c) % s.length;
  return s.slice(i) + s.slice(0, i);
};
