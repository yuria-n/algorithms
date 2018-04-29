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
  return compareLevel(root);

  function compareLevel(node) {
    if (!node) {
      return true;
    }
    const diff = Math.abs(dfs(node.left, 0) - dfs(node.right, 0));
    if (diff <= 1 && compareLevel(node.left) && compareLevel(node.right)) {
      return true;
    }
    return false;
  }

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
