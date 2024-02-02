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
  // まずmatrixの右端と左端の値でバイナリーサーチ
  // targetが存在するrow x を見つけたら、そのrowに対してバイナリーサーチ
  const lx = matrix.length;
  const ly = matrix[0].length;
  let left = 0;
  let right = lx * ly - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    const x = Math.floor(mid / lx);
    const y = mid % ly;
    const num = matrix[y][x];
    console.log(left, right, mid, { y, x });
    if (num === target) {
      return true;
    }
    if (num < target) {
      left = mid + 1;
      continue;
    }
    right = mid - 1;
  }
  return false;
}
