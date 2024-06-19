// By implementing push and pop functions
/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  k;
  heap = [-Infinity];

  constructor(k, nums) {
    this.k = k;
    for (const num of nums) {
      this.add(num);
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.push(val);
    this.pop();
    return this.heap[1];
  }

  push(val) {
    this.heap.push(val);
    let i1 = this.heap.length - 1;
    let i0 = Math.floor(i1 / 2);
    while (this.heap[i1] < this.heap[i0]) {
      [this.heap[i1], this.heap[i0]] = [this.heap[i0], this.heap[i1]];
      i1 = i0;
      i0 = Math.floor(i1 / 2);
    }
  }

  pop() {
    if (this.heap.length <= this.k + 1) {
      return;
    }

    let val = this.heap.pop();
    let i = 1;
    this.heap[i] = val;
    let il = 2 * i;
    let ir = il + 1;
    let valL = this.heap[il];
    let valR = this.heap[ir] ?? Infinity;
    while (il < this.heap.length && val > Math.min(valL, valR)) {
      if (valL < valR) {
        [this.heap[i], this.heap[il]] = [valL, val];
        i = il;
      } else {
        [this.heap[i], this.heap[ir]] = [valR, val];
        i = ir;
      }
      val = this.heap[i];
      il = 2 * i;
      ir = 2 * i + 1;
      valL = this.heap[il];
      valR = this.heap[ir];
    }
  }
}

// By using PriorityQueue class (not implemented)
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.pq = new PriorityQueue({ initialValues: nums });
    this.k = k;

    while (this.pq.size() > this.k) {
      this.pq.poll();
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    if (this.pq.size() < this.k) {
      this.pq.offer(val);
    } else if (val > this.pq.peek()) {
      this.pq.poll();
      this.pq.offer(val);
    }

    return this.pq.peek();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
