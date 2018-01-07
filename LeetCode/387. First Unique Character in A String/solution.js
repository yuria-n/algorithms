/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const l = s.length;
    const map = {};
    for (let i = 0; i < l; i++) {
        const c = s[i];
        map[c] = ++map[c] || 1;
    }
    
    for (let i = 0; i < l; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};
