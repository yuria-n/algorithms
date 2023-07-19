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
function averageOfSubtree(root) {
  let result = 0;
  dfs(root);
  return result;

  function dfs(node) {
    if (node === null) {
      return [0, 0];
    }
    const [sumL, numL] = dfs(node.left);
    const [sumR, numR] = dfs(node.right);
    const sum = sumL + sumR - node.val;
    const num = numL + numR - 1;
    if (Math.floor(sum / num) === node.val) {
      result++;
    }
    return [sum, num];
  }
}
