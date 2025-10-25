/*
 * Complete the 'debounceTimestamps' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY timestamps
 *  2. INTEGER K
 */

function debounceTimestamps(timestamps, K) {
  let count = 0;
  let prev = -Infinity;
  for (const time of timestamps) {
    if (time - prev < K) {
      continue;
    }
    count++;
    prev = time;
  }
  return count;
}
