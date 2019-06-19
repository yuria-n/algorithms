/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
  return num > 0 && !(num & (num - 1)) && !((num - 1) % 3);
};

// Loop
const isPowerOfFour2 = function(num) {
  while (num >= 4) {
    num /= 4;
  }
  return num === 1;
};

// Recursion
const isPowerOfFour3 = function(num) {
  if (num < 4) {
    return num === 1;
  }
  return isPowerOfFour(num / 4);
};
