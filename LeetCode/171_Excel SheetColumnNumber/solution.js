/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
    const l = s.length - 1;
    let result = 0;
    for (let i = l; i >= 0; i--) {
        const c = l - i;
        const n = s[i].charCodeAt() - 64;
        result += n * Math.pow(26, c);
    }
    return result;
};
