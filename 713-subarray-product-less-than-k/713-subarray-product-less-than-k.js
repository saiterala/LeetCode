/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0
    let left = 0
    let ans = 0
    let prod = 1
    
    for ( let right = 0; right < nums.length; right++){
        prod *= nums[right]
        
        while(prod >= k) prod /= nums[left++]
        
        ans += right - left + 1
    }
    
    return ans
};