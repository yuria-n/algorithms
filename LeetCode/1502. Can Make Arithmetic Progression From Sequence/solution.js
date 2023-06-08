/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
  const nums = arr.sort((n1, n2) => n1 - n2);
  const [n0, n1] = nums;
  const diff = n1 - n0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== n0 + diff * i) {
      return false;
    }
  }
  return true;
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression2(arr) {
  const min = Math.min(...arr);
  const diff = (Math.max(...arr) - min) / (arr.length - 1);
  const set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(min + diff * i)) {
      return false;
    }
  }
  return true;
}
