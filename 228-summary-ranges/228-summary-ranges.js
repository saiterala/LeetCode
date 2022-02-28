/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = []
    let i = 0
    while (i < nums.length ){
        let start = i
        let str = nums[i]
        
        while(nums[i + 1] === nums[i] + 1 && i < nums.length){
            i++
        }
        
        if(start === i){
            result.push(str.toString())
        }else{
            result.push(`${str}->${nums[i]}`)
        }
        i++
    }
    return result
};