/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let count = 0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++
        }else{
            res = Math.max(res, count)
            count = 0
        }
    }
    
    res = Math.max(res, count)
    return res;
    
};