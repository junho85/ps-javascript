/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (const [index, num] of nums.entries()) {
        const find_num = target - num;

        let find_result = nums.slice(index + 1).findIndex(n => n === find_num);
        if (find_result !== -1) {
            let found_index = find_result + index + 1;
            let result = [index, found_index];
            return result;
        }
    }
    return [0, 1];
};

var assert = require('assert');

assert(twoSum([2, 7, 11, 15], 9).every(e => [0, 1].includes(e)));
assert(twoSum([3, 2, 4], 6).every(e => [1, 2].includes(e)));
