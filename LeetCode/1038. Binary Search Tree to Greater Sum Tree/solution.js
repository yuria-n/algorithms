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
  dfs(root, []);
  return root;
}

function dfs(node, visited) {
  if (node === null) {
    return;
  }
  const { val, left, right } = node;
  dfs(left, visited);
  for (const n of visited) {
    n.val += val;
  }
  visited.push(node);
  dfs(right, visited);
}
