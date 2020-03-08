/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n) {
  const n1 = n % 2 ? 0 : 1;
  const n2 = n - n1;
  return 'a'.repeat(n1) + 'b'.repeat(n2);
};
