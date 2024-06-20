/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  // solution: min-heap
  const heap = [-Infinity];

  for (let i = 0; i < nums.length; i++) {
    push(nums[i]);
    pop();
  }

  return heap[1];

  function push(val) {
    if (heap.length === k + 1 && val < heap[1]) {
      return;
    }

    heap.push(val);
    let i1 = heap.length - 1;
    let i0 = Math.floor(i1 / 2);
    while (i0 >= 1 && heap[i0] > heap[i1]) {
      [heap[i0], heap[i1]] = [heap[i1], heap[i0]];
      i1 = i0;
      i0 = Math.floor(i1 / 2);
    }
  }

  function pop() {
    if (heap.length <= k + 1) {
      return;
    }
    let i = 1;
    heap[i] = heap.pop();
    let l = 2 * i;
    let r = l + 1;
    let valL = heap[l];
    let valR = heap[r] ?? Infinity;
    while (l < heap.length && heap[i] > Math.min(valL, valR)) {
      if (valL < valR) {
        [heap[l], heap[i]] = [heap[i], valL];
        i = l;
      } else {
        [heap[r], heap[i]] = [heap[i], valR];
        i = r;
      }
      l = 2 * i;
      r = l + 1;
      valL = heap[l];
      valR = heap[r] ?? Infinity;
    }
  }
}
