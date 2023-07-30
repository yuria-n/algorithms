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
 * @return {TreeNode}
 */
function bstToGst(root) {
  dfs(root, 0);
  return root;
}

function dfs(node, sum) {
  if (node === null) {
    return sum;
  }
  node.val += dfs(node.right, sum);
  return dfs(node.left, node.val);
}
