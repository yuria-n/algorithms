class FirstUnique {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.uniqueSet = new Set();
    this.duplicateSet = new Set();

    for (const num of nums) {
      this.add(num);
    }

    this.first = this.showFirstUnique();
  }

  /**
   * @return {number}
   */
  showFirstUnique = () => (!this.uniqueSet.size ? -1 : this.uniqueSet.keys().next.value);

  /**
   * @param {number} value
   * @return {void}
   */
  add = (value) => {
    if (this.duplicateSet.has(value)) {
      return;
    }
    if (!this.uniqueSet.has(value)) {
      this.uniqueSet.add(value);
      return;
    }
    this.uniqueSet.delete(value);
    this.duplicateSet.add(value);
  };
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
