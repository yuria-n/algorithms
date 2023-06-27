// _.find

type Iterator<T> = (val: T, index: number, arr: T[]) => boolean;

function find<T>(arr: T[], iterator: Iterator<T>): T | undefined {
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    if (iterator(value, index, arr)) {
      return value;
    }
  }
}
