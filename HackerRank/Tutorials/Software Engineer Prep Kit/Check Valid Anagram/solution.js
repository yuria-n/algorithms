/*
 * Complete the 'isAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 */

const offset = "a".charCodeAt(0);

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return 0;
  }

  const counts = Array.from({ length: 26 }).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - offset]++;
  }

  for (let i = 0; i < t.length; i++) {
    counts[t.charCodeAt(i) - offset]--;
  }

  return counts.every((count) => count === 0) ? 1 : 0;
}
