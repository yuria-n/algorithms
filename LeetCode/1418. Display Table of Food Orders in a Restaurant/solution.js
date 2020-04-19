/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
const displayTable = function (orders) {
  const headerSet = new Set();
  const tableSet = new Set();
  const orderMap = new Map();
  for (const [, table, food] of orders) {
    headerSet.add(food);
    tableSet.add(table);
    const order = orderMap.get(table) || new Map();
    orderMap.set(table, order);
    const count = order.get(food) || 0;
    order.set(food, count + 1);
  }
  const headers = Array.from(headerSet).sort();
  const tables = Array.from(tableSet).sort((h1, h2) => h1 - h2);
  const result = [['Table', ...headers]];
  for (const table of tables) {
    const row = [table];
    const orders = orderMap.get(table);
    for (const food of headers) {
      const count = orders.get(food) || 0;
      row.push(count + '');
    }
    result.push(row);
  }
  return result;
};
