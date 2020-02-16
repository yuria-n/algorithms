class ProductOfNumbers {
  constructor() {
    this.nums = [];
  }

  /**
   * @param {number} num
   * @return {void}
   */
  add = num => {
    this.nums.push(num);
  };

  /**
   * @param {number} k
   * @return {number}
   */
  getProduct = k => {
    let prod = 1;
    const l = this.nums.length;
    for (let i = l - 1; i >= l - k; i--) {
      prod *= this.nums[i];
    }
    return prod;
  };
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
