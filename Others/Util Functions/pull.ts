// _.pull

type Arr<T> = T[];

function pull<T>(arr: Arr<T>, ...vals: Partial<Arr<T>>): Partial<Arr<T>> {
  const set = new Set<T>(...vals);
  const output: T[] = [];
  for (const val of arr) {
    if (!set.has(val)) {
      output.push(val);
    }
  }
  return output;
}
