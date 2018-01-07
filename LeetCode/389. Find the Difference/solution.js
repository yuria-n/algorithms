/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    const l = s.length;
    let sumS = 0;
    let sumT = 0;
    for (let i = 0; i < l; i++) {
        sumS += s[i].charCodeAt();
        sumT += t[i].charCodeAt();
    }
    const diff = sumT + t[l].charCodeAt() - sumS;
    return String.fromCharCode(diff);
};
