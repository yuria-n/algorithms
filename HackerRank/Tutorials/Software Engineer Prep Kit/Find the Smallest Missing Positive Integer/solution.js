/*
 * Complete the 'findSmallestMissingPositive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY orderNumbers as parameter.
 */

function findSmallestMissingPositive(orderNumbers) {
  const l = orderNumbers.length;

  for (let i = 0; i < l; i++) {
    while (
      orderNumbers[i] > 0 &&
      orderNumbers[i] <= l &&
      orderNumbers[orderNumbers[i] - 1] !== orderNumbers[i]
    ) {
      const correctIndex = orderNumbers[i] - 1;
      [orderNumbers[correctIndex], orderNumbers[i]] = [
        orderNumbers[i],
        orderNumbers[correctIndex],
      ];
    }
  }

  for (let i = 0; i < orderNumbers.length; i++) {
    if (orderNumbers[i] !== i + 1) {
      return i + 1;
    }
  }

  return l + 1;
}
