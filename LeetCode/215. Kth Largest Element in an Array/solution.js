/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  return heapify(nums, k)[1];

  function heapify(heap, k) {
    heap.push(heap[0]);

    // Sort
    let i = Math.floor(heap.length / 2) + 1;
    while (--i > 0) {
      sort(i);
    }

    // Pop
    while (heap.length > k + 1) {
      heap[1] = heap.pop();
      sort(1);
    }

    return heap;

    function sort(i) {
      let j = i;
      let l = 2 * j;
      let r = l + 1;
      let valL = heap[l];
      let valR = heap[r] ?? Infinity;
      while (l < heap.length && heap[j] > Math.min(valL, valR)) {
        if (valL < valR) {
          [heap[l], heap[j]] = [heap[j], valL];
          j = l;
        } else {
          [heap[r], heap[j]] = [heap[j], valR];
          j = r;
        }
        l = 2 * j;
        r = l + 1;
        valL = heap[l];
        valR = heap[r] ?? Infinity;
      }
    }
  }
}
