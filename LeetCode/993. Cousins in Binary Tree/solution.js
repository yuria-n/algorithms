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
function isCousins(root, x, y) {
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
      dfs(node.left, node.val, target, depth + 1) ||
      dfs(node.right, node.val, target, depth + 1)
    );
  }
}

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins2(root, x, y) {
  let [lvx, pvx] = findVal(root, root.val, 0, x);
  let [lvy, pvy] = findVal(root, root.val, 0, y);
  return lvx === lvy && pvx !== pvy;

  function findVal(node, prev, lv, val) {
    while (node !== null) {
      if (node.val === val) {
        return [lv, prev];
      }
      return (
        findVal(node.left, node.val, lv + 1, val) ??
        findVal(node.right, node.val, lv + 1, val)
      );
    }
    return null;
  }
}
