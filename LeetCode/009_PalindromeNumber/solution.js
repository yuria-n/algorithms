/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {

    if(x < 0 || x > 2147483647) {
        return false;
    }

    let original = x;
    let reverse = '';
    while (original !== 0) {
        reverse += original % 10;
        original = parseInt(original / 10);
    }

    return x == reverse;
};
