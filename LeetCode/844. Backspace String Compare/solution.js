/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
  let wordS = '';
  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    if (c !== '#') {
      wordS += c;
      continue;
    }
    wordS = wordS.substr(0, Math.max(0, wordS.length - 1));
  }

  let wordT = '';
  for (let i = 0; i < T.length; i++) {
    const c = T[i];
    if (c !== '#') {
      wordT += c;
      continue;
    }
    wordT = wordT.substr(0, Math.max(0, wordT.length - 1));
  }

  const l = wordS.length;
  if (l !== wordT.length) {
    return false;
  }

  for (let i = 0; i < l; i++) {
    if (wordS[i] !== wordT[i]) {
      return false;
    }
  }

  return true;
};
