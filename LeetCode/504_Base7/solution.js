/**
 * @param {number} num
 * @return {string}
 */

const convertToBase7 = function(num) {
    if (!num) {
        return '0';
    }

    let result = '';
    let n = Math.abs(num);

    while (n) {
        let r = n % 7;
        result = r + result;
        n = Math.floor(n / 7);
    }

    return (num > 0 ? '' : '-') + result;
};
