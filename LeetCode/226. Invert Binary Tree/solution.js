/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
}

// BFS (stack)
function invertTree(root) {
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === null) {
      continue;
    }
    [node.left, node.right] = [node.right, node.left];
    stack.push(node.left, node.right);
  }

  return root;
}
