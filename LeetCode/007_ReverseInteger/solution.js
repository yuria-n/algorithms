/**
 * @param {number} x
 * @return {number}
 */

 const MAX_VALUE = 2147483647;
 const MIN_VALUE = -2147483648;

var reverse = function(x) {
    let result = 0;

    while (x != 0) {
        result = result * 10 + x % 10;
        x = parseInt(x / 10);
    }

    return result < MIN_VALUE || result > MAX_VALUE ? 0 : result;
};
