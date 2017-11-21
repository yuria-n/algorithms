/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const v = map[c] + 1 || 1;
        map[c] = v;
    }
    
    for (let i = 0; i < t.length; i++) {
        const c = t[i];
        if (!map[c]) {
            return c;
        }
        map[c]--;
    }
};
