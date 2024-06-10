/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];
  backtrack("", n, n);
  return result;

  function backtrack(substr, open, close) {
    if (open === 0 && close === 0) {
      result.push(substr);
      return;
    }
    if (open > 0) {
      backtrack(substr + "(", open - 1, close);
    }
    if (open < close) {
      backtrack(substr + ")", open, close - 1);
    }
  }
}
