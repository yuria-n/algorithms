/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let l = strs.length;
    if (l == 0) {
        return "";
    }

    let str0 = strs[0];
    if (l < 1 || str0.length == 0) {
        return str0;
    }

    let result = "";
    check:
    for (let i = 0; i < str0.length; i++) {
        let s = str0.charAt(i);
        for (let j = 1; j < l; j++) {
            let c = strs[j].charAt(i);
            if (s != c) {
                break check;
            }
        }
        result += s;
    }
    return result;
};
