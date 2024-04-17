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
function goodNodes(root) {
  let result = 0;
  dfs(root, root.val);
  return result;

  function dfs(node, curMax) {
    if (node === null) {
      return;
    }
    if (node.val >= curMax) {
      result++;
    }
    const max = Math.max(curMax, node.val);
    dfs(node.left, max);
    dfs(node.right, max);
  }
}

// BFS
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
function goodNodes2(root) {
  let count = 0;
  const stack = [[root, root.val]];
  while (stack.length > 0) {
    const [node, max] = stack.pop();
    if (node === null) {
      continue;
    }
    const { val, left, right } = node;
    if (val >= max) {
      count++;
    }
    const m = Math.max(val, max);
    stack.push([right, m], [left, m]);
  }
  return count;
}
