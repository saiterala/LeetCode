/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    for (var i=0; i< nums.length-1; i++){
        if(nums[i] === 0){
            let j = i+1
            while(nums[j] === 0 && j < nums.length-1){
                j++
            }
            nums[i] = nums[j]
            nums[j] = 0
        }
    }
    
};