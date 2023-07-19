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
  dfs(root, 0, 0);
  return result;

  function dfs(node, sum, num) {
    if (node === null) {
      return [sum, num];
    }
    const [sumL, numL] = dfs(node.left, 0, 0);
    const [sumR, numR] = dfs(node.right, 0, 0);
    sum = sumL + sumR - node.val;
    num = numL + numR - 1;
    if (Math.floor(sum / num) === node.val) {
      result++;
    }
    return [sum, num];
  }
}
