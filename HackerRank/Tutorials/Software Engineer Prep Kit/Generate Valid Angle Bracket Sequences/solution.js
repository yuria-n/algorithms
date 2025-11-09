/*
 * Complete the 'generateAngleBracketSequences' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function generateAngleBracketSequences(n) {
  const result = [];

  function backtrack(current, openCount, closeCount) {
    // Base case: if we've used all n pairs
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // Add '<' if we haven't used all n opening brackets
    if (openCount < n) {
      backtrack(current + "<", openCount + 1, closeCount);
    }

    // Add '>' if we have unmatched opening brackets
    if (closeCount < openCount) {
      backtrack(current + ">", openCount, closeCount + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
}
