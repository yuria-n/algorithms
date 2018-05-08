/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const map = {};

  while (!map[n]) {
    map[n] = true;
    let sum = 0;
    while (n > 0) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    if (sum === 1) {
      return true;
    }
    n = sum;
  }

  return false;
};

const isHappy2 = function (n) {
  const map = {};
  return check(n);

  function check(n) {
    if (n === 1) {
      return true;
    }
    if (map[n]) {
      return false;
    }
    map[n] = true;
    let sum = 0;
    while (n > 0) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    return check(sum);
  }
};