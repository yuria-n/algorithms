/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        const key = magazine[i];
        map[key] = map[key] ? map[key] + 1 : 1;
        // map[key] = ++map[key] || 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const key = ransomNote[i];
        if (!map[key]--) {
            return false;
        }
    }
    return true;
};
