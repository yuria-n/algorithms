/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
    let result = 0;
    let c = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const n = s[i].charCodeAt() - 64;
        result += n * Math.pow(26, c);
        c++;
    }
    return result;
};
