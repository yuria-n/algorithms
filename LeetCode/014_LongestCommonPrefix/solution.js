/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const len = strs.length;
    if (!len) {
        return '';
    }

    const str0 = strs[0];
    const l = str0.length;
    if (l < 1 || !l) {
        return str0;
    }

    let result = '';
    check:
    for (let i = 0; i < l; i++) {
        const s = str0.charAt(i);
        for (let j = 1; j < len; j++) {
            const c = strs[j].charAt(i);
            if (s !== c) {
                break check;
            }
        }
        result += s;
    }
    return result;
};
