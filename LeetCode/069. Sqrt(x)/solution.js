/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  return Math.floor(Math.sqrt(x));
};

const mySqrt = function(x) {
  if (x <= 1) {
    return x;
  }

  let left = 0;
  let right = x;
  let mid;
  let power;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    power = mid * mid;
    if (power === x) {
      return mid;
    }
    if (power < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return mid - (power < x ? 0 : 1);
};
