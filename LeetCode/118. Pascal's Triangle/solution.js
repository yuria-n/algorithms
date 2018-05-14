/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    result.push(generateRow(i));
  }
  return result;

  function generateRow(i) {
    const row = [];
    if (i <= 1) {
      for (let j = 0; j < i + 1; j++) {
        row.push(1);
      }
    } else {
      row.push(1);
      const prevRow = result[i - 1];
      for (let j = 0; j < prevRow.length - 1; j++) {
        row.push(prevRow[j] + prevRow[j + 1]);
      }
      row.push(1);
    }
    return row;
  }
};
