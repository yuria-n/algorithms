/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes) {
  let count = 0;
  let sum = responseTimes[0];

  for (let i = 1; i < responseTimes.length; i++) {
    const time = responseTimes[i];
    const average = sum / i;
    if (time > average) {
      count++;
    }
    sum += time;
  }

  return count;
}
