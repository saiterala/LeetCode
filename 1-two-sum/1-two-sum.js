/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for(let i = 0; i< nums.length; i++){
        const val = target - nums[i]
        if(val in map) return [i, map[val]]
        else{
            map[nums[i]] = i
        }
    }
};