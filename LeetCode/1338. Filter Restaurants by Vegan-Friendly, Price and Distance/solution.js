/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
const filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  const map = new Map();
  for (const restaurant of restaurants) {
    const [id, rating, vegan, price, distance] = restaurant;
    if (vegan === veganFriendly && price <= maxPrice && distance <= maxDistance) {
      const list = map.get(rating) || [];
      list.push(id);
      map.set(rating, list);
    }
  }
  const result = [];
  Array.from(map.keys())
    .sort((n1, n2) => n2 - n1)
    .forEach(rating => {
      result.push(...map.get(rating).sort((n1, n2) => n2 - n1));
    });
  return result;
};
