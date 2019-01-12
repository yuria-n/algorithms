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
const isUnivalTree = function(root) {
  return compare(root);

  function compare(node) {
    if (!node) {
      return true;
    }

    if (node.val !== root.val) {
      return false;
    }

    return compare(node.left) && compare(node.right);
  }
};
