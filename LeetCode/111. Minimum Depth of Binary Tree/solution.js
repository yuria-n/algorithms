/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
  let level = 0;
  if (!root) {
    return level;
  }
  return dfs(root, level);

  function dfs(node, level) {
    if (!node) {
      return Infinity;
    }
    level++;
    if (!node.left && !node.right) {
      return level;
    }
    return Math.min(dfs(node.left, level), dfs(node.right, level));
  }
};
