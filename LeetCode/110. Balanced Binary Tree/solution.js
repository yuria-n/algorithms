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
function isBalanced(root) {
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
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced2(root) {
  return dfs(root) !== Infinity;

  function dfs(node) {
    if (node === null) {
      return 0;
    }
    const left = dfs(node.left) + 1;
    const right = dfs(node.right) + 1;
    return Math.abs(left - right) > 1 ? Infinity : Math.max(left, right);
  }
}