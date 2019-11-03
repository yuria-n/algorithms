/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumSwap = function(s1, s2) {
  const count = { xy: 0, yx: 0 };

  for (let i = 0; i < s1.length; i++) {
    const c1 = s1[i];
    const c2 = s2[i];
    if (c1 === c2) {
      continue;
    }
    if (c1 === 'x') {
      count.xy++;
      continue;
    }
    count.yx++;
  }

  const { xy, yx } = count;
  if ((xy + yx) % 2) {
    return -1;
  }
  return Math.floor(xy / 2) + (xy % 2) + Math.floor(yx / 2) + (yx % 2);
};
