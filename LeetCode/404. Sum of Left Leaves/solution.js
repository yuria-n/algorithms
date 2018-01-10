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

const sumOfLeftLeaves = function(root) {
  if (root == null) return 0;

  let sum = 0;
  if (root.left != null) {
    sum +=
      root.left.left == null && root.left.right == null
        ? root.left.val
        : sumOfLeftLeaves(root.left);
  }
  sum += sumOfLeftLeaves(root.right);

  return sum;
};
