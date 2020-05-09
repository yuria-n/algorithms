/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let n = Math.max(~~(num / 2), 1);
  while (n ** 2 > num) {
    n = (n + num / x) >> 1;
  }
  return n && n ** 2 === num;
};

const isPerfectSquare = function (num) {
  let left = 1;
  let right = Math.max(~~(num / 2), 1);
  while (left < right) {
    const mid = left + ~~((right - left) / 2);
    const square = mid ** 2;
    if (square === num) {
      return true;
    }
    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left ** 2 === num;
};
