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
    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);
  }

  return root;
}

// BFS (stack)
function invertTree(root) {
  if (root === null) {
    return root;
  }

  const head = new TreeNode();
  const stack = [[root, head]];

  while (stack.length > 0) {
    const [node, newNode] = stack.pop();
    if (node === null) {
      continue;
    }

    newNode.val = node.val ?? null;

    if (node.left) {
      newNode.right = new TreeNode(null);
      stack.push([node.left, newNode.right]);
    }

    if (node.right) {
      newNode.left = new TreeNode(null);
      stack.push([node.right, newNode.left]);
    }
  }

  return head;
}
