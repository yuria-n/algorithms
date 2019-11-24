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
const sumNumbers = function(root) {
  let sum = 0;
  dfs(root, 0);
  return sum;

  function dfs(node, num) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    num = num * 10 + val;
    if (!left && !right) {
      sum += num;
    }
    dfs(left, num);
    dfs(right, num);
  }
};
