/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
  const stats = [];
  dfs(root, 0);

  return stats.map(s => s.sum / s.count);

  function dfs(node, level) {
    if (!node) {
      return node;
    }
    stats[level] = stats[level] || { sum: 0, count: 0 };
    stats[level].sum += node.val;
    stats[level].count++;
    level++;
    dfs(node.left, level);
    dfs(node.right, level);
  }
};
