/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let found = false
    
    for ( let i= 0; i < nums.length; i++){
        if(nums[i] === 1) found = true
        
        if(nums[i] < 1 || nums[i] > nums.length){
            nums[i] = 1
        }
    }
    
    if(!found) return 1
    
    for (let i = 0; i < nums.length; i++){
        const value = Math.abs(nums[i])
        nums[value - 1] = -Math.abs(nums[value - 1])
    }
    
    for ( let i = 0 ; i < nums.length; i++){
        if(nums[i] > 0) return i+1
    }
    
    return nums.length + 1
};