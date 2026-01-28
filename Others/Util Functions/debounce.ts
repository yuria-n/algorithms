// _.debounce

type DebouncedFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel(): void;
  flush(): void;
};

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): DebouncedFunction<T> {
  let prev: NodeJS.Timeout | null = null;
  let cb: (() => void) | null = null;

  function debouncedFunc(...args: Parameters<T>): void {
    cancel();
    cb = () => func(...args);
    prev = setTimeout(cb, wait);
  }

  function cancel(): void {
    if (prev !== null) {
      clearTimeout(prev);
      prev = null;
    }
  }

  function flush(): void {
    if (cb !== null) {
      cancel();
      cb();
      cb = null;
    }
  }

  debouncedFunc.cancel = cancel;
  debouncedFunc.flush = flush;

  return debouncedFunc as DebouncedFunction<T>;
}

export default debounce;
