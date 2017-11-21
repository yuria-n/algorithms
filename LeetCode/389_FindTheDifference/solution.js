/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    const arr = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        arr[c.charCodeAt() - 97]++;
    }

    for (let i = 0; i < t.length; i++) {
        const c = t[i];
        if (!arr[c.charCodeAt() - 97]) {
            return c;
        }
        arr[c.charCodeAt() - 97]--;
    }
};
