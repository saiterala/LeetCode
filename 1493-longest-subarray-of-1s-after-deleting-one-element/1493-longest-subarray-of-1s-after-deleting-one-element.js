/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let count = 0
    let res = 0;
    let left = 0
    let right = 0;
    
    while(right < nums.length){
        if(nums[right] === 0){
            count++
        }
        
        while(count > 1 ){
            if(nums[left] === 0){
                count--
            }
            left++
        }
        res = Math.max(res, right -left)
        right++
    }
    
    return res;
    
};