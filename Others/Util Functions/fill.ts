// _.fill

function fill<T>(arr: T[], val: T, start = 0, end = arr.length): T[] {
  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i < end) {
      arr[i] = val;
    }
  }
  return arr;
}
