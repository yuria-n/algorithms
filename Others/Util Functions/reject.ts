// _.reject

type Iterator<T> = (val: T, index: number, arr: T[]) => boolean;

function reject<T>(arr: T[], iterator: Iterator<T>): T[] {
  return arr.filter((val, index) => !iterator(val, index, arr));
}
