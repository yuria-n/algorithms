/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    let previous = 0;
    let current = 0;
    nums.forEach((n) => {
        const tmp = current;
        current = Math.max(previous + n, current);
        previous = tmp;
    });
    return current;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob2 = function(nums) {
    const sums = new Array(2).fill(0);

    for (const n of nums) {
        const t = Math.max(sums[1] + n, sums[0]);
        [sums[0], sums[1]] = [t, sums[0]];
    }

    return sums[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob3 = function(nums) {
    const sums = new Array(2).fill(0);

    for (let i = nums.length; i >= 0; i--) {
        const n = nums[i] + Math.max(...sums);
        [sums[0], sums[1]] = [n, sums[0]];
    }

    return Math.max(...sums);
};
