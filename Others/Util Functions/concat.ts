// _.concat

function concat<T>(arr: T[], ...vals: T[]): T[] {
  const result = [...arr];
  for (const val of vals) {
    if (!Array.isArray(val)) {
      result.push(val);
      continue;
    }
    result.push(...val);
  }
  return result;
}
