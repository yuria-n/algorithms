/**
 * @param {number} n
 * @return {string}
 */

const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const length = digits.length;

const convertToTitle = function(n) {
    let result = '';

    while (n > 0) {
        const p = n % length;
        result = digits.charAt((!!p ? p - 1 : length - 1)) + result;
        n = Math.floor((n - 1) / length);
    }

    return result;
};
