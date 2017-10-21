/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let l = nums.length;

    if (l < 2) {
        return;
    }

    const map = new Map();
    for (i = 0; i < l; i++) {
        let n = nums[i];
        let d = target - n;

        if(map.has(n)) {
            return [map.get(n), i];
        }

        map.set(d, i);
    }
    return;
};
