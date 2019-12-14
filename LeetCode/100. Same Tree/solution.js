/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (!p || !q) {
    return !p && !q;
  }
  const { left: leftP, right: rightP, val: valP } = p;
  const { left: leftQ, right: rightQ, val: valQ } = q;
  if (valP !== valQ) {
    return false;
  }
  return isSameTree(leftP, leftQ) && isSameTree(rightP, rightQ);
};
