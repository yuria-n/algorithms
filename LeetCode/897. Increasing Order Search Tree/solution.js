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
const increasingBST = function(root) {
  let result = new TreeNode();
  let current = result;
  lineUp(root);
  current.right = null;
  return result.right;

  function lineUp(node) {
    if (!node) {
      return;
    }

    lineUp(node.left);
    [node.left, current.right, current] = [null, node, node];
    lineUp(node.right);
  }
};
