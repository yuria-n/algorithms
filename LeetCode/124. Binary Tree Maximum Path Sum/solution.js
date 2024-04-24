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
 * @return {number}
 */
function maxPathSum(root) {
  let max = -Infinity;
  dfs(root);
  return max;

  function dfs(node) {
    if (!node) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const next = Math.max(node.val, node.val + Math.max(left, right));
    max = Math.max(max, next, node.val + left + right);
    return next;
  }
}

function maxPathSum2(root) {
  let max = -Infinity;
  dfs(root);
  return max;

  function dfs(node) {
    if (node === null) {
      return 0;
    }
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);
    max = Math.max(max, node.val + left + right);
    return node.val + Math.max(left, right);
  }
}
