/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  set = new Set();

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert = (val) => {
    if (this.set.has(val)) {
      return false;
    }
    this.set.add(val);
    return true;
  };

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove = (val) => {
    if (!this.set.has(val)) {
      return false;
    }
    this.set.delete(val);
    return true;
  };

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom = () => {
    const i = Math.floor(Math.random() * this.set.size);
    return Array.from(this.set)[i];
  };
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
