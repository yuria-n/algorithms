// Solution 1: sort
/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    stones.push(stones.pop() - stones.pop());
  }
  return stones[0];
};

// Solution 2: heap
class Heap {
  heap = [Infinity];

  constructor(nums) {
    for (const num of nums) {
      this.push(num);
    }
  }

  push(num) {
    this.heap.push(num);

    let i1 = this.size();
    let i0 = Math.floor(i1 / 2);
    let val1 = this.heap[i1];
    let val0 = this.heap[i0] ?? -Infinity;
    while (i1 <= this.size() && val1 > val0) {
      [this.heap[i0], this.heap[i1]] = [val1, val0];
      i1 = i0;
      i0 = Math.floor(i1 / 2);
      val1 = this.heap[i1];
      val0 = this.heap[i0];
    }
  }

  pop() {
    if (this.size() === 0) {
      return 0;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const res = this.heap[1];
    this.heap[1] = this.heap.pop();
    for (let ip = Math.ceil(this.size() / 2); ip > 0; ip--) {
      let i = ip;
      let il = 2 * i;
      let ir = il + 1;
      let val = this.heap[i];
      let valL = this.heap[il];
      let valR = this.heap[ir] ?? -Infinity;
      while (il <= this.size() + 1 && val < Math.max(valL, valR)) {
        if (valL > valR) {
          [this.heap[i], this.heap[il]] = [valL, val];
          i = il;
        } else {
          [this.heap[i], this.heap[ir]] = [valR, val];
          i = ir;
        }
        il = 2 * i;
        ir = il + 1;
        val = this.heap[i];
        valL = this.heap[il];
        valR = this.heap[ir];
      }
    }
    return res;
  }

  size() {
    return this.heap.length - 1;
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  const heap = new Heap(stones);
  while (heap.size() >= 2) {
    const diff = heap.pop() - heap.pop();
    if (diff === 0) {
      continue;
    }
    heap.push(diff);
  }
  return heap.pop();
}
