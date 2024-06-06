/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const letterLists = [
    ,
    ,
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  const result = [];
  if (digits.length > 0) {
    backtrack("", 0);
  }
  return result;

  function backtrack(string, index) {
    if (index === digits.length) {
      result.push(string);
      return;
    }
    const letters = letterLists[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(string + letters[i], index + 1);
    }
  }
}
