/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const map = new Map();
  let sequence = 0;
  for (const num of nums) {
    if (map.has(num)) {
      continue;
    }
    const il = num - 1;
    const ir = num + 1;
    const left = map.has(il) ? map.get(il) : 0;
    const right = map.has(ir) ? map.get(ir) : 0;
    const subSequence = left + right + 1;
    map.set(num, subSequence);
    map.set(num - left, subSequence);
    map.set(num + right, subSequence);
    sequence = Math.max(sequence, subSequence);
  }

  return sequence;
}
