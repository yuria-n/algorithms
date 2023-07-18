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
 * @return {number}
 */
function sumEvenGrandparent(root) {
  let result = 0;
  dfs(root, null, null);
  return result;

  function dfs(node, pNode, gNode) {
    if (node === null) {
      return;
    }
    // console.log(node.val, gNode?.val);
    if (gNode?.val % 2 === 0) {
      result += node.val;
    }
    dfs(node.left, node, pNode);
    dfs(node.right, node, pNode);
  }
}
