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

  const visited = new Array(100).fill(undefined);
  return cloneNode(node);

  function cloneNode(node) {
    const cache = visited[node.val];
    if (cache !== undefined) {
      return cache;
    }
    const clone = new _Node(node.val);
    visited[node.val] = clone;
    clone.neighbors = node.neighbors.map((neighbor) => cloneNode(neighbor));
    return clone;
  }
}
