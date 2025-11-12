/*
 * Complete the 'minTasksToCancelForNoConflict' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING digits as parameter.
 */

const letters = [
  "0",
  "1",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

function minTasksToCancelForNoConflict(digits) {
  if (digits.length === 0) {
    return [];
  }

  const result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const digit = digits[index];
    const chars = letters[digit];

    for (let i = 0; i < chars.length; i++) {
      backtrack(index + 1, current + chars[i]);
    }
  }

  backtrack(0, "");

  return result;
}
