/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  if (!root) {
    return true;
  }
  const diff = Math.abs(dfs(root.left, 0) - dfs(root.right, 0));
  return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);

  function dfs(node, level) {
    if (!node) {
      return level;
    }
    level++;
    if (!node.left && !node.right) {
      return level;
    }
    return Math.max(dfs(node.left, level), dfs(node.right, level));
  }
};
