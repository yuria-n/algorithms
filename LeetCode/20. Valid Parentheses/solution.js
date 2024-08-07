/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const stack = [];
  for (const c of s) {
    if (map.has(c)) {
      stack.push(map.get(c));
      continue;
    }
    if (c !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
