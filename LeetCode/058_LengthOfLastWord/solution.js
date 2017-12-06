/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    let count = 0;
    let l = s.length - 1;
    while (s[l] === ' ') {
        l--;
    }
    while (l > -1 && s[l] !== ' ') {
        count++;
        l--;
    }
    return count;
};
