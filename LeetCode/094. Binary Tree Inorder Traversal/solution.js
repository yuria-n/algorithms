/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const result = [];
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) {
      return;
    }

    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
};
