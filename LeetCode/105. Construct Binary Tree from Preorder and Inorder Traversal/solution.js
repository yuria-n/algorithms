/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const val = preorder.shift();
  const m = inorder.indexOf(val);
  const left = buildTree(preorder.slice(0, m), inorder.slice(0, m));
  const right = buildTree(preorder.slice(m), inorder.slice(m + 1));

  return new TreeNode(val, left, right);
}
