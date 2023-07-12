// _.concat

function concat<T>(arr: T[], ...vals: T[]): T[] {
  const result = [...arr];
  for (const val of vals) {
    result.push(val);
  }
  return result;
}
