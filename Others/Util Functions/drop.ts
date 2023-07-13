// _.drop

function drop<T>(arr: T[], n = 1): T[] {
  const result = [];
  for (let i = n; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
