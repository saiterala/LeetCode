/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    nums.sort((a,b) => a-b)
    console.log(nums)
    
    let res = 0
    
    while(left < right){
        if(nums[left] +nums[right] < target){
            res = res + (right - left)
            left++
        }
        if(nums[left] + nums[right] >= target){
            right--
        }
    }
    return res
};