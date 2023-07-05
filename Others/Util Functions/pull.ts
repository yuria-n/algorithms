// _.pull

function pull<T>(arr: T[], ...vals: T[]): T[] {
  const set = new Set<T>(...vals);
  const output: T[] = [];
  for (const val of arr) {
    if (!set.has(val)) {
      output.push(val);
    }
  }
  return output;
}
