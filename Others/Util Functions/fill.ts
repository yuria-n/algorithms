// _.fill

function fill<T>(arr: T[], val: T, start = 0, end = arr.length): T[] {
  for (let i = start; i < Math.min(end, arr.length); i++) {
    arr[i] = val;
  }
  return arr;
}
