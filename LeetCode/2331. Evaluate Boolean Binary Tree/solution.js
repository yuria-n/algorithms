/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function evaluateTree(root) {
  const { val, left, right } = root;
  if (left === null && right === null) {
    return val === 1;
  }
  return val === 2
    ? evaluateTree(left) || evaluateTree(right)
    : evaluateTree(left) && evaluateTree(right);
}

function evaluateTree2(node) {
  switch (node?.val ?? 0) {
    case 0:
      return false;
    case 1:
      return true;
    case 2:
      return evaluateTree(node.left) || evaluateTree(node.right);
    case 3:
      return evaluateTree(node.left) && evaluateTree(node.right);
  }
}
