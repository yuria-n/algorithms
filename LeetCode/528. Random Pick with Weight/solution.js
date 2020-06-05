/**
 * @param {number[]} w
 */
class Solution {
  constructor(w) {
    this.weights = w;
    this.total = w.reduce((n, total) => total + n);
  }

  /**
   * @return {number}
   */
  pickIndex = () => {
    const n = Math.floor(Math.random() * this.total);
    let cur = 0;
    for (const [i, weight] of this.weights.entries()) {
      cur += weight;
      if (cur > n) {
        return i;
      }
    }
  };
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
