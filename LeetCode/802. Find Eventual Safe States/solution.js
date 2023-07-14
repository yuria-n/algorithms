/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  const visitedNodes = Array.from({ length: graph.length });
  for (let i = 0; i < graph.length; i++) {
    if (visitedNodes[i] !== undefined) {
      continue;
    }
    visitedNodes[i] = validate(i, new Set());
  }

  const result = [];
  for (let i = 0; i < visitedNodes.length; i++) {
    if (visitedNodes[i]) {
      result.push(i);
    }
  }

  return result;

  function validate(node, visited) {
    if (visitedNodes[node] !== undefined) {
      return visitedNodes[node];
    }

    if (visited.has(node)) {
      return false;
    }

    if (graph[node].length === 0) {
      return true;
    }

    visited.add(node);
    visitedNodes[node] = graph[node].every((n) => validate(n, visited));
    return visitedNodes[node];
  }
}
