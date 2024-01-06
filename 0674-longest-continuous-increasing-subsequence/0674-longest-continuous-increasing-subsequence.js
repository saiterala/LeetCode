/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 1
    let i =0
    
    for(let j =1; j < nums.length; j++){
        if(nums[j -1] < nums[j]){
            max = Math.max(j-i+1, max)
        }else{
            i = j
        }
    }
    
    return max
};