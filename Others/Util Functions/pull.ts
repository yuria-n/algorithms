// _.pull

function pull<T>(arr: T[], ...vals: T[]): T[] {
  const set = new Set<T>(vals);
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (set.has(arr[right])) {
      continue;
    }
    if (left < right) {
      arr[left] = arr[right];
    }
    left++;
  }
  return arr.splice(0, left);
}
