/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  let available = 0;

  let i = 0;
  while (i < flowerbed.length) {
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      available++;
      i++;
    }
    i++;
  }

  return available >= n;
};
