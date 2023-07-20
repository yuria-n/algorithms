// _.compact

type Truthy<T> = Exclude<NonNullable<T>, false | 0 | ''>;

function compact<T>(arr: T[]): Truthy<T>[] {
  return arr.filter((val) => val) as Truthy<T>[];
}
