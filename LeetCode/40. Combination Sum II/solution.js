/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((n1, n2) => n1 - n2);
  const result = [];
  backtrack([], 0, target);
  return result;

  function backtrack(subset, index, target) {
    if (target === 0) {
      result.push([...subset]);
    }
    if (target < 0 || index === candidates.length) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i !== index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      const val = candidates[i];
      subset.push(val);
      backtrack(subset, i + 1, target - val);
      subset.pop();
    }
  }
}
