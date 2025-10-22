class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(num) {
    this.stack.push(num);
    const currentMin = Math.min(
      num,
      this.minStack[this.minStack.length - 1] ?? Infinity,
    );
    this.minStack.push(currentMin);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

function processCouponStackOperations(operations) {
  const result = [];
  const stack = new MinStack();

  for (const operation of operations) {
    if (operation === "getMin") {
      result.push(stack.getMin());
      continue;
    }
    if (operation === "top") {
      result.push(stack.top());
      continue;
    }
    if (operation === "pop") {
      stack.pop();
      continue;
    }
    const [, num] = operation.split(" ");
    stack.push(Number(num));
  }

  return result;
}
