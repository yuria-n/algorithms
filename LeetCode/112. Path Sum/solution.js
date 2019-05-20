/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  return dfs(root, 0);

  function dfs(node, count) {
    if (!node) {
      return false;
    }
    count += node.val;
    if (!node.left && !node.right) {
      return count === sum;
    }
    return dfs(node.left, count) || dfs(node.right, count);
  }
};

const hasPathSum2 = function(root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;
  if (!root.left && !root.right) {
    return !sum;
  }
  return hasPathSum2(root.left, sum) || hasPathSum2(root.right, sum);
};

const hasPathSum3 = function(root, sum) {
  if (!root) {
    return false;
  }

  const { left, right, val } = root;
  sum -= val;
  if (!left && !right && sum === 0) {
    return true;
  }

  return hasPathSum(left, sum) || hasPathSum(right, sum);
};
