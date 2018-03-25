/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
  const key = image[sr][sc];

  if (key !== newColor) {
    changeColor(sr, sc);
  }

  return image;

  function changeColor(r, c) {
    const row = image[r];
    if (!row) {
      return;
    }
    const n = row[c];
    if (n !== key) {
      return;
    }
    image[r][c] = newColor;
    changeColor(r - 1, c);
    changeColor(r + 1, c);
    changeColor(r, c - 1);
    changeColor(r, c + 1);
  }
};
