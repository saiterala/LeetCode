/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0
    let right = 0
    
    for( let i =0; i < nums.length; i ++){
        
        if(nums[i] === 0){
            k--
        }
        
        if( k < 0){
            k += 1 - nums[left]
            left++
        }
        right++
    }
    return right - left
};