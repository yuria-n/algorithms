/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let j = stack.length;
    while (--j >= 0) {
      const k = stack[j];
      if (temperatures[k] > temperatures[i]) {
        result[i] = k - i;
        break;
      }
      stack.pop();
    }
    stack.push(i);
  }

  return result;
}
