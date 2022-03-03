/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let result = 0
    if(nums.length < 3) return result
    let i = 2
    let preDiff = nums[0] - nums[1]
    let currCount = 0
    while( i < nums.length){
        let diff = nums[i-1] - nums[i]
        if(diff === preDiff){
            result += ++currCount
        }else{
            preDiff = diff
            currCount = 0
        }
        i++
    }
    
    return result
};


