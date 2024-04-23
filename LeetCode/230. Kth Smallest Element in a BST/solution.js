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
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  let res = -1;
  dfs(root);
  return res;

  function dfs(node) {
    if (node === null) {
      return null;
    }
    const { val, left, right } = node;
    dfs(left);
    k -= 1;
    if (k === 0) {
      res = val;
      return;
    }
    dfs(right);
  }
}
