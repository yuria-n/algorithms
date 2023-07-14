/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  const visited = Array.from({ length: graph.length });
  const result = [];
  for (let i = 0; i < graph.length; i++) {
    if (validate(i)) {
      result.push(i);
    }
  }
  return result;

  function validate(node) {
    if (visited[node] !== undefined) {
      return visited[node];
    }
    visited[node] = false;
    visited[node] = graph[node].every(validate);
    return visited[node];
  }
}
