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
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  if (!root) {
    return null;
  }
  const trimmedLeft = trimBST(root.left, L, R);
  const trimmedRight = trimBST(root.right, L, R);

  if (root.val < L || root.val > R) {
    return trimmedLeft || trimmedRight;
  }

  root.left = trimmedLeft;
  root.right = trimmedRight;
  return root;
};
