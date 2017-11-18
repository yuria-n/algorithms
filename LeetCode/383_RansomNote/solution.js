/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        const key = magazine[i];
        const count = map[key] ? map[key] + 1 : 1;
        map[key] = count;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const key = ransomNote[i];
        if (!map[key]) {
            return false;
        }
        const count = map[key] - 1;
        if (!count) {
            delete map[key];
        } else {
            map[key] = count;
        }
    }
    return true;
};
