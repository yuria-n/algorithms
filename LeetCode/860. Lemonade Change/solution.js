/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
  const stock = {};

  for (const bill of bills) {
    stock[bill] = ++stock[bill] || 1;
    switch (bill) {
      case 5:
        break;
      case 10:
        if (stock[5]) {
          stock[5]--;
          break;
        }
        return false;
      default:
        if (stock[10] && stock[5]) {
          stock[10]--;
          stock[5]--;
          break;
        }
        if (stock[5] >= 3) {
          stock[5] -= 3;
          break;
        }
        return false;
    }
  }

  return true;
};
