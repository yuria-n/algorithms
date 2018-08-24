/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  const nonPrimeMap = {};
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (nonPrimeMap[i]) {
      continue;
    }
    count++;
    for (let j = i; j < n; j += i) {
      nonPrimeMap[j] = true;
    }
  }

  return count;
};
