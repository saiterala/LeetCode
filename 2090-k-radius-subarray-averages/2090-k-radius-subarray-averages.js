/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    if(k === 0) return nums
    
    const result = Array(nums.length).fill(-1)
    
    if(k > nums.length) return result
    
    let count = 0
    let sum = 0
    const divident = k * 2 + 1
    
    for (let i = 0; i < nums.length; i++ ){
        if( count === k * 2){
            sum += nums[i]
            result[i-k] = Math.floor(sum / divident)
            sum -= nums[i - (k * 2)]
        }else{
            count ++
            sum += nums[i]
        }
    }
    return result
};