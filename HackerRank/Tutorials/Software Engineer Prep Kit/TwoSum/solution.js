/*
 * Complete the 'findTaskPairForSlot' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY taskDurations
 *  2. INTEGER slotLength
 */

function findTaskPairForSlot(taskDurations, slotLength) {
  const map = new Map();

  for (let i = 0; i < taskDurations.length; i++) {
    const n = taskDurations[i];
    const m = slotLength - n;
    if (map.has(m)) {
      return [map.get(m), i];
    }
    map.set(n, i);
  }

  return [-1, -1];
}
