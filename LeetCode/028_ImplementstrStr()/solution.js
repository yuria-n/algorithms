/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    const lh = haystack.length;
    const ln = needle.length;
    if (!ln) {
        return 0;
    }
    
    let n0 = needle[0];
    
    loop:
    for (let i = 0; i < lh - ln + 1; i++) {
        let h = haystack[i];
        if (h !== n0){
            continue;
        }

        for (let j = 1; j < ln; j++) {
            if (needle[j] !== haystack[i + j]) {
                continue loop;
            }
        }

        return i;
    }
    
    return -1;
};
