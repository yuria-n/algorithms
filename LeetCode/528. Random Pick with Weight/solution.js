/**
 * @param {number[]} w
 */
class Solution {
  constructor(w) {
    this.weights = [];
    this.total = 0;
    for (const n of w) {
      this.total += n;
      this.weights.push(this.total);
    }
  }

  /**
   * @return {number}
   */
  pickIndex = () => {
    const n = ~~(Math.random() * this.total);
    let left = 0;
    let right = this.weights.length - 1;
    while (left < right) {
      const mid = left + ~~((right - left) / 2);
      if (this.weights[mid] <= n) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
