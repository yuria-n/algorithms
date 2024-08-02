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
      if (temperatures[j] <= temperatures[i]) {
        result[i] = j - i;
        break;
      }
      stack.pop();
    }
    stack.push(i);
  }
  return result;
}

function dailyTemperatures(temperatures) {
  const l = temperatures.length;
  const result = new Array(l).fill(0);
  const stack = [];

  for (let i = l - 1; i >= 0; i--) {
    const cur = temperatures[i];
    let j = stack[stack.length - 1];
    while (stack.length > 0 && cur >= temperatures[j]) {
      stack.pop();
      j = stack[stack.length - 1];
    }
    result[i] = stack.length === 0 ? 0 : j - i;
    stack.push(i);
  }

  return result;
}
