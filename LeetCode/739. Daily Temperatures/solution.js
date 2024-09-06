/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const l = temperatures.length;
  const result = new Array(l).fill(0);
  const stack = [];
  for (let i = l - 1; i >= 0; i--) {
    let j = stack[stack.length - 1];
    while (stack.length > 0) {
      if (temperatures[i] < temperatures[j]) {
        result[i] = j - i;
        break;
      }
      stack.pop();
      j = stack[stack.length - 1];
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
