/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let lastIndex = 0
    for ( let i=0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            if(lastIndex !== i){
                const temp = nums[i]
                nums[i] = nums[lastIndex]
                nums[lastIndex] = temp
            }
            lastIndex++
        }
    }
    
    return nums
};