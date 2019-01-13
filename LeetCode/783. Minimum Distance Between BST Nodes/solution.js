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
const minDiffInBST = function(root) {
  let diff = Infinity;
  let prev = -Infinity;
  find(root);
  return diff;

  function find(node) {
    if (!node) {
      return;
    }

    find(node.left);

    diff = Math.min(diff, node.val - prev);
    prev = node.val;

    find(node.right);
  }
};
