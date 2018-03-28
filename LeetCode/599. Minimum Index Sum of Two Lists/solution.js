/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
  let result = [];
  const map = {};
  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i;
  }

  let min = 2000;
  for (let i = 0; i < list2.length; i++) {
    const item = list2[i];
    if (!item in map) {
      continue;
    }
    const p = map[item] + i;
    if (min > p) {
      result = [item];
      min = p;
    } else if (min === p) {
      result.push(item);
    }
  }

  return result;
};
