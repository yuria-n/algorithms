/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  const map = new Map();
  dfs(root, 0);
  return root;

  function dfs(node, depth) {
    if (node === null) {
      return;
    }
    if (map.has(depth)) {
      map.get(depth).next = node;
    }
    map.set(depth, node);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
}

// BFS (queue) - O(1) memory complexity
function connect2(root) {
  let depth = -1;
  let node = root;
  const queue = [];
  queue.push([0, root]);
  while (queue.length > 0) {
    const [d, n] = queue.shift();
    if (n === null) {
      continue;
    }
    if (d === depth) {
      node.next = n;
    } else {
      depth++;
    }
    node = n;
    queue.push([d + 1, n.left], [d + 1, n.right]);
  }
  return root;
}
