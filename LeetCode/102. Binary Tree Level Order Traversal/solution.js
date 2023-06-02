/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const result = [];
  dfs(root, 0);
  return result;

  function dfs(node, depth) {
    if (!node) {
      return;
    }

    const arr = result[depth];
    result[depth] = !arr ? [node.val] : [...arr, node.val];

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};

function levelOrder2(root) {
  const result = [];
  dfs(root, 0);
  return result;

  function dfs(node, depth) {
    if (!node) {
      return;
    }
    if (result[depth] === undefined) {
      result.push([]);
    }
    result[depth].push(node.val);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
}
