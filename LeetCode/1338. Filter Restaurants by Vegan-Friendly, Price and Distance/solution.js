/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
const filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
  return restaurants
    .filter(
      ([, , vegan, price, distance]) =>
        vegan >= veganFriendly && price <= maxPrice && distance <= maxDistance,
    )
    .sort(([id1, rating1], [id2, rating2]) => rating2 - rating1 || id2 - id1)
    .map(([id]) => id);
};
