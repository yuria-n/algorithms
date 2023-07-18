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
  return dfs(root, null, null);

  function dfs(node, pNode, gNode) {
    if (node === null) {
      return 0;
    }
    // console.log(node.val, gNode?.val);
    return (
      (gNode?.val % 2 === 0 ? node.val : 0) +
      dfs(node.left, node, pNode) +
      dfs(node.right, node, pNode)
    );
  }
}
