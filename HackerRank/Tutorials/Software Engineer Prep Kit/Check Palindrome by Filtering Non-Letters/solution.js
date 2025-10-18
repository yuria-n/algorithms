/*
 * Complete the 'isAlphabeticPalindrome' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code as parameter.
 */

function isAlphabeticPalindrome(code) {
  const letters = code.toLowerCase().replace(/[^a-z]/g, "");
  return letters === letters.split("").reverse().join("") ? 1 : 0;
}
