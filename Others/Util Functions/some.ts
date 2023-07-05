// _.some

type Iterator<T> = (val: T, index: number, arr: T[]) => boolean;

function some<T>(arr: T[], iterator: Iterator<T>): boolean {
  for (let index = 0; index < arr.length; index++) {
    if (iterator(arr[index], index, arr)) {
      return true;
    }
  }
  return false;
}
