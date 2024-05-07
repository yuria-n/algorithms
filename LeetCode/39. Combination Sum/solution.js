/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const result = [];
  backtracking([], 0, target);
  return result;

  function backtracking(combo, index, target) {
    if (target === 0) {
      result.push([...combo]);
      return;
    }
    if (target < 0 || index >= candidates.length) {
      return;
    }
    const val = candidates[index];
    combo.push(val);
    backtracking(combo, index, target - val);
    combo.pop();
    backtracking(combo, index + 1, target);
  }
}
