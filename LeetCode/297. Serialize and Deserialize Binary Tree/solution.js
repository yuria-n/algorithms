/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const valNull = "";

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  if (root === null) {
    return "";
  }

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node?.val ?? valNull);
    if (node === null) {
      continue;
    }
    queue.push(node.left, node.right);
  }

  return values.join(",");
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  if (data.length === 0) {
    return null;
  }

  const values = data.split(",");
  const root = new TreeNode(values.shift());
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val === valNull) {
      continue;
    }
    const valL = values.shift();
    if (valL !== valNull) {
      node.left = new TreeNode(valL);
      queue.push(node.left);
    }
    const valR = values.shift();
    if (valR !== valNull) {
      node.right = new TreeNode(valR);
      queue.push(node.right);
    }
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
