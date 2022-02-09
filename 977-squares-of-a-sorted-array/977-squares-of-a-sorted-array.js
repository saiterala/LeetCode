/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = []
    let left = 0
    let right = nums.length -1

    for (let i = nums.length-1; i >= 0; i--){
        const leftVal = nums[left]
        const rightVal = nums[right]
        
        if(Math.abs(leftVal) > Math.abs(rightVal)){
            result[i] = leftVal * leftVal
            left++
        }else{
            result[i] = rightVal * rightVal
            right--
        }
    }
    return result
};