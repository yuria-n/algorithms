/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} sum
 * @return {boolean}
 */

function hasPathSum(node, sum) {
  if (node === null) {
    return false;
  }
  const { val, left, right } = node;
  sum -= val;
  if (left === null && right === null) {
    return sum === 0;
  }
  return hasPathSum(left, sum) || hasPathSum(right, sum);
}

// DFS (stack) - LILO
function hasPathSum2(root, targetSum) {
  const stack = [];
  stack.push([root, targetSum]);

  while (stack.length > 0) {
    let [node, sum] = stack.pop();
    if (node === null) {
      continue;
    }

    const { val, left, right } = node;
    sum -= val;
    if (right === null && left === null) {
      if (sum === 0) {
        return true;
      }
      continue;
    }
    stack.push([right, sum], [left, sum]);
  }

  return false;
}

// BFS (queue) - FIFO
function hasPathSum3(root, targetSum) {
  const queue = [];
  queue.push([root, targetSum]);

  while (queue.length > 0) {
    let [node, sum] = queue.shift();
    if (node === null) {
      continue;
    }

    const { val, left, right } = node;
    sum -= val;
    // left === right === null
    if (left === right) {
      if (sum === 0) {
        return true;
      }
      continue;
    }
    queue.push([left, sum], [right, sum]);
  }

  return false;
}
