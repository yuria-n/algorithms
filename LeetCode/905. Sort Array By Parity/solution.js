/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  const result = [];

  A.forEach((num) => (num % 2 === 0 ? result.unshift(num) : result.push(num)));

  return result;
};
