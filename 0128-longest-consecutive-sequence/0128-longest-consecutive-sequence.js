/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    
    let max = 0
    
    for(const num of nums){
        if(!set.has(num -1)){
            let currentSteak = 1
            let currentNum = num
            while(set.has(currentNum + 1)){
                currentSteak++
                currentNum++
            }
            
            max = Math.max(max, currentSteak)
        }
    }
    
    return max
};