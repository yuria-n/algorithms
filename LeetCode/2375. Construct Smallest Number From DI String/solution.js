/**
 * @param {string} pattern
 * @return {string}
 */
function smallestNumber(pattern) {
  for (let n = 1; n <= 9; n++) {
    const nums = backtrack([n], 0);
    if (nums !== null) {
      return nums.join("");
    }
  }

  function backtrack(subset, index) {
    const isUnique = new Set(subset).size === index + 1;

    if (!isUnique || index > pattern.length) {
      return null;
    }

    if (index === pattern.length) {
      return subset;
    }

    const num = subset[subset.length - 1];
    const start = pattern[index] === "D" ? 1 : num + 1;
    const end = pattern[index] === "D" ? num - 1 : 9;

    for (let n = start; n <= end; n++) {
      subset.push(n);
      const s = backtrack(subset, index + 1);
      if (s !== null) {
        return s;
      }
      subset.pop();
    }
    return null;
  }
}
