/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  const result = [];
  A.forEach((num) => {
    num % 2 === 0 && result.push(num);
  });
  A.forEach((num) => {
    num % 2 === 1 && result.push(num);
  });

  return result;
};
