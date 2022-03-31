/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    while(nums[0] !== nums[nums[0]]){
        const temp = nums[0]
        nums[0] = nums[temp]
        nums[temp] = temp
    }
    return nums[0]
};