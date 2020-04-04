/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    let cur = 0;
    while (n) {
      cur += (n % 10) ** 2;
      n = ~~(n / 10);
    }
    n = cur;
  }
  return n === 1;
};
