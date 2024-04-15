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
function levelOrder(root) {
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

// BFS
function levelOrder2(root) {
  const result = [];
  const stack = [[root, 0]];
  while (stack.length > 0) {
    const [node, i] = stack.pop();
    if (node === null) {
      continue;
    }
    const { val, left, right } = node;
    if (result.length === i) {
      result.push([]);
    }
    result[i].push(val);
    stack.push([right, i + 1], [left, i + 1]);
  }
  return result;
}
