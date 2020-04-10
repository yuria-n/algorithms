/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function (S, T) {
  let is = S.length - 1;
  let it = T.length - 1;
  let ds = 0;
  let dt = 0;
  while (is >= 0 || it >= 0) {
    const cs = S[is] || '';
    const ct = T[it] || '';
    if (cs === '#') {
      ds++;
      is--;
      continue;
    }
    if (ct === '#') {
      dt++;
      it--;
      continue;
    }
    if (ds) {
      ds--;
      is--;
      continue;
    }
    if (dt) {
      dt--;
      it--;
      continue;
    }
    if (cs !== ct) {
      return false;
    }
    is--;
    it--;
  }
  return true;
};

const backspaceCompare = function (S, T) {
  return format(S) === format(T);

  function format(str) {
    let word = '';
    let i = str.length;
    let d = 0;
    while (--i >= 0) {
      const c = str[i];
      if (c === '#') {
        d++;
        continue;
      }
      if (d > 0) {
        d--;
        continue;
      }
      word = c + word;
    }
    return word;
  }
};
