/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.queue = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    const l = this.queue.length;
    this.queue[l] = x;
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    const queue = [];
    const val = this.queue[0];
    for (let i = 0; i < this.queue.length - 1; i++) {
      queue[i] = this.queue[i + 1];
    }
    this.queue = queue;
    return val;
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    return this.queue[0];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.queue.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
