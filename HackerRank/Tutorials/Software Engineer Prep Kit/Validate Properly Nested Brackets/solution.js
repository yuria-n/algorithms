/*
 * Complete the 'areBracketsProperlyMatched' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts STRING code_snippet as parameter.
 */

function areBracketsProperlyMatched(code_snippet) {
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (let i = code_snippet.length - 1; i >= 0; i--) {
    const char = code_snippet[i];
    switch (char) {
      case ")":
      case "}":
      case "]": {
        stack.push(bracketMap[char]);
        break;
      }
      case "(":
      case "{":
      case "[": {
        if (stack.pop() !== char) {
          return 0;
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  return stack.length === 0;
}
