/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const nonPrimeMap = Array(n);
  let count = n < 3 ? 0 : 1;
  for (let i = 3; i < n; i += 2) {
    if (nonPrimeMap[i]) {
      continue;
    }
    count++;
    for (let j = i * i; j < n; j += i) {
      nonPrimeMap[j] = true;
    }
  }
  return count;
}

const countPrimes2 = function(n) {
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
