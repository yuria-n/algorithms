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
 * @param {number[]} arr
 * @return {boolean}
 */
const isValidSequence = function (root, arr) {
  return dfs(root, 0);

  function dfs(node, i) {
    if (!node) {
      return false;
    }
    const { left, right, val } = node;
    if (val !== arr[i]) {
      return false;
    }
    if (++i === arr.length) {
      return !left && !right; // or left === right
    }
    return dfs(left, i) || dfs(right, i);
  }
};
