/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  const { val, left, right } = root;
  if (val > p.val && val > q.val) {
    return lowestCommonAncestor(left, p, q);
  }
  if (val < p.val && val < q.val) {
    return lowestCommonAncestor(right, p, q);
  }
  return root;
}

function lowestCommonAncestor2(root, p, q) {
  while (root) {
    const { val, left, right } = root;
    if (val > p.val && val > q.val) {
      root = left;
      continue;
    }
    if (val < p.val && val < q.val) {
      root = right;
      continue;
    }
    break;
  }
  return root;
}
