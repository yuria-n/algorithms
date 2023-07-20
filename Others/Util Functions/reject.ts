// _.reject

type Iterator<T> = (val: T, index: number, arr: T[]) => boolean;

function reject<T>(arr: T[], iterator: Iterator<T>): T[] {
  const output: T[] = [];
  for (let index = 0; index < arr.length; index++) {
    const val = arr[index];
    if (!iterator(val, index, arr)) {
      output.push(val);
    }
  }
  return output;
}
