/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  let result = root;
  invert(root);
  return result;

  function invert(node) {
    if (!node) {
      return;
    }

    const t = node.left;
    node.left = node.right;
    node.right = t;

    invert(node.left);
    invert(node.right);
  }
};
