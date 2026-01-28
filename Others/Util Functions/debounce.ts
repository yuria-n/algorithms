// _.debounce

function debounce(func, wait) {
  let prev = null;
  let cb = null;
  f.cancel = cancel;
  f.flush = flush;
  return f;

  function f(...args) {
    cancel();
    cb = () => func(...args);
    prev = setTimeout(cb, wait);
  }

  function cancel() {
    if (prev === null) {
      return;
    }
    clearTimeout(prev);
    prev = null;
  }

  function flush() {
    if (cb === null) {
      return;
    }
    cancel();
    cb();
    cb = null;
  }
}
