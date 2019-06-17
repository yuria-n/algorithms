/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
  const queue = { even: [], odd: [] };
  for (let i = 0; i < A.length; i++) {
    switch (i % 2) {
      case A[i] % 2:
        continue;
      case 0:
        helper(i, queue.even, queue.odd);
        continue;
      case 1:
        helper(i, queue.odd, queue.even);
    }
  }
  return A;

  function helper(i, arr1, arr2) {
    if (!arr1.length) {
      arr2.push(i);
      return;
    }
    const j = arr1.pop();
    [A[j], A[i]] = [A[i], A[j]];
  }
};
