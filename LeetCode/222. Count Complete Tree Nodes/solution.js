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
const countNodes = function(root) {
  if (!root) {
    return 0;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};

const countNodes2 = function(root) {
  let result = 0;
  count(root);
  return result;

  function count(node) {
    if (!node) {
      return;
    }
    count(node.left);
    result++;
    count(node.right);
  }
};
