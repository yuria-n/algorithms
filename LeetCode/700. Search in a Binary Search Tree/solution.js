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
  while (root && root.val !== val) {
    root = root.val < val ? root.right : root.left;
  }
  return root;
};

const searchBST1 = function(root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  return searchBST(root.left, root.target) || searchBST(root.right, root.target);
};

const searchBST2 = function(root, val) {
  if (!root) {
    return null;
  }
  if (root.val < val) {
    return searchBST(root.right, val);
  }
  if (root.val > val) {
    return searchBST(root.left, val);
  }
  return root;
};
