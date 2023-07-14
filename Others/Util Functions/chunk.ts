// _.chunk

function chunk<T>(arr: T[], size = 1): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => {
    const i = size * index;
    return arr.slice(i, i + size);
  });
}
