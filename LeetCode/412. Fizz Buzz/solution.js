/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(String(i));
    }
  }

  return result;
};

const fizzBuzz2 = function(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let val = '';

    if (i % 3 === 0) {
      val += 'Fizz';
    }

    if (i % 5 === 0) {
      val += 'Buzz';
    }

    if (val === '') {
      val += i;
    }

    result.push(val);
  }

  return result;
};
