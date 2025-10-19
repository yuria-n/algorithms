/*
 * Complete the 'maximizeNonOverlappingMeetings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY meetings as parameter.
 */

function maximizeNonOverlappingMeetings(meetings) {
  meetings.sort((m1, m2) => m1[1] - m2[1]);

  let count = 0;
  let lastEnd = 0;

  for (const [start, end] of meetings) {
    if (lastEnd <= start) {
      count++;
      lastEnd = end;
    }
  }

  return count;
}
