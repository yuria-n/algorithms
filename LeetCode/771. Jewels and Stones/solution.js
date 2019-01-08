/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  const set = new Set();
  for (const jewel of J) {
    set.add(jewel);
  }

  let count = 0;
  for (const stone of S) {
    if (set.has(stone)) {
      count++;
    }
  }

  return count;
};

const numJewelsInStones2 = function(J, S) {
  return S.split('').filter((char) => J.indexOf(char) !== -1).length;
};
