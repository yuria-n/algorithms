/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  let result = null;
  search(root);
  return result;

  function search(node) {
    if (!node) {
      return;
    }

    search(node.left);

    if (node.val === val) {
      result = node;
      return;
    }

    if (node.val > val) {
      return;
    }

    search(node.right);
  }
};
