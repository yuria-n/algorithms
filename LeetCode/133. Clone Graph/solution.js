/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
function cloneGraph(node) {
  if (node === null) {
    return null;
  }
  const visited = new Map();
  return cloneNode(node);

  function cloneNode(node) {
    if (visited.has(node.val)) {
      return visited.get(node.val);
    }
    const clone = new _Node(node.val);
    visited.set(node.val, clone);
    clone.neighbors = node.neighbors.map((neighbor) => cloneNode(neighbor));
    return clone;
  }
}
