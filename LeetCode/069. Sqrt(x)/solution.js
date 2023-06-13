/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  return Math.floor(Math.sqrt(x));
}

function mySqrt2(x) {
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
}

function mySqrt3(x) {
  let left = 0;
  let right = x + 1;
  let result = 0;
  while (left < right) {
    result = Math.floor((right - left) / 2) + left;
    const sqrt = result ** 2;
    if (sqrt === x) {
      return result;
    }
    if (sqrt < x) {
      left = result + 1;
    } else {
      right = result;
    }
  }
  return result - (result ** 2 > x ? 1 : 0);
}
