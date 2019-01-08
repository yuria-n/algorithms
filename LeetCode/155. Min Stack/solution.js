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
  push(x) {
    this.stack.push(x);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    let min = Infinity;
    for (const num of this.stack) {
      min = Math.min(min, num);
    }
    return min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
