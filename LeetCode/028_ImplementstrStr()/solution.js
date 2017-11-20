/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    const lh = haystack.length;
    const ln = needle.length;
    if (lh < needle) {
        return -1;
    }
    if (!ln) {
        return 0;
    }
    
    let n0 = needle[0];
    for (let i = 0; i < lh; i++) {
        let h = haystack[i];
        if (h !== n0){
            continue;
        }

        for (let j = 0; j < ln; j++) {
            const n1 = needle[j];
            const h1 = haystack[i + j];
            if (n1 !== h1) {
                break;
            }
            if (j === ln - 1) {
                return i;
            }
        }

        if (lh - i <= ln) {
            break;
        }
    }
    
    return -1;
};
