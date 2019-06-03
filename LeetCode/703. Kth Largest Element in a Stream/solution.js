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
