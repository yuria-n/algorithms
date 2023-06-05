/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const map = {};
  nums.forEach((n) => {
    map[n] = true;
  });
  for (let i = 0; i <= nums.length; i++) {
    if (!map[i]) {
      return i;
    }
  }
}

function missingNumber2(nums) {
  const sortedNums = nums.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < sortedNums.length + 1; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
}

function missingNumber3(nums) {
  const actualSum = nums.reduce((num, acc) => acc + num, 0);
  const expectedSum = ((1 + nums.length) / 2) * nums.length;
  return actualSum === expectedSum ? 0 : expectedSum - actualSum;
}
