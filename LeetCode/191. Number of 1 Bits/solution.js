// Solution 1: Look up table
const byteWeights = Array.from({ length: 256 }, (_, i) => {
  let count = 0;
  let n = i;
  while (n > 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
});

/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
  return (
    byteWeights[n & 0xff] +
    byteWeights[(n >>> 8) & 0xff] +
    byteWeights[(n >>> 16) & 0xff] +
    byteWeights[(n >>> 24) & 0xff]
  );
}

// Solution 2: bit shift
/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
  let result = 0;
  while (n > 0) {
    result += n & 1;
    n >>= 1;
  }
  return result;
}

// Solution 3: Brian Kernighan's algorithm
/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
  let count = 0;
  while (n > 0) {
    n &= n - 1;
    count++;
  }
  return count;
}
