/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root, x, y) {
  const [xParent, xDepth] = dfs(root, root.val, x, 0);
  const [yParent, yDepth] = dfs(root, root.val, y, 0);
  return xDepth === yDepth && xParent !== yParent;

  function dfs(node, parent, target, depth) {
    if (!node) {
      return null;
    }
    if (node.val === target) {
      return [parent, depth + 1];
    }
    return (
      dfs(node.left, node.val, target, depth + 1) || dfs(node.right, node.val, target, depth + 1)
    );
  }
};
