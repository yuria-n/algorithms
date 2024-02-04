/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const lx = matrix[0].length;
  const ly = matrix.length;
  let left = 0;
  let right = lx * ly;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    const num = matrix[Math.floor(mid / lx)][mid % lx];
    if (num === target) {
      return true;
    }
    if (num < target) {
      left = mid + 1;
      continue;
    }
    right = mid;
  }
  return false;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const y = searchRow(matrix, target);
  return y === -1 ? false : searchNum(matrix[y], target);
}

function searchRow(matrix, target) {
  let left = 0;
  let right = matrix.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const row = matrix[mid];
    const numF = row[0];
    const numL = row[row.length - 1];
    if (numL < target) {
      left = mid + 1;
      continue;
    }
    if (numF > target) {
      right = mid;
      continue;
    }
    return mid;
  }
  return -1;
}

function searchNum(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num < target) {
      left = mid + 1;
      continue;
    }
    if (num > target) {
      right = mid;
      continue;
    }
    break;
  }
  return left < right;
}
