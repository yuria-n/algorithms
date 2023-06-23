// _.forEach

type Iterator<T> = (val: T, index: number, arr: T[]) => void;

function forEach<T>(arr: T[], iterator: Iterator<T>): void {
  for (let index = 0; index < arr.length; index++) {
    iterator(arr[index], index, arr);
  }
}
