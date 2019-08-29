/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root, L, R) {
  let result = 0;
  calc(root);
  return result;

  function calc(node) {
    if (!node) {
      return;
    }
    calc(node.left);
    const { val } = node;
    if (val >= L && val <= R) {
      result += val;
    }
    calc(node.right);
  }
};
