// _.map

type Iterator<T, V> = (val: T, index: number, arr: T[]) => V;

function map<T, V>(arr: T[], iterator: Iterator<T, V>): V[] {
  const output: V[] = new Array(arr.length);
  for (let index = 0; index < arr.length; index++) {
    output[index] = iterator(arr[index], index, arr);
  }
  return output;
}
