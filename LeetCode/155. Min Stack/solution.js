/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.min = Infinity;
    this.stack = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push = (x) => {
    this.stack.push(x);
    if (x < this.min) {
      this.min = x;
    }
  };
  /**
   * @return {void}
   */
  pop = () => {
    const x = this.stack.pop();
    if (x === this.min) {
      this.min = Math.min(...this.stack);
    }
  };
  /**
   * @return {number}
   */
  top = () => {
    return this.stack[this.stack.length - 1];
  };
  /**
   * @return {number}
   */
  getMin = () => {
    return this.min;
  };
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push = (x) => {
    this.stack.push(x);
  };
  /**
   * @return {void}
   */
  pop = () => {
    this.stack.pop();
  };
  /**
   * @return {number}
   */
  top = () => {
    return this.stack[this.stack.length - 1];
  };
  /**
   * @return {number}
   */
  getMin = () => {
    return Math.min(...this.stack);
  };
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
