/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length > 0) {
      const j = stack[stack.length - 1];
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
      stack.pop();
    }
    stack.push(i);
  }
  return result;
}
