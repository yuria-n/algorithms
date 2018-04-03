/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
  const result = [];
  dpf(root, 0);
  return result.reverse();

  function dpf(node, level) {
    if (!node) {
      return node;
    }
    result[level] = result[level] || [];
    result[level].push(node.val);
    level++;
    dpf(node.left, level);
    dpf(node.right, level);
  }
};
