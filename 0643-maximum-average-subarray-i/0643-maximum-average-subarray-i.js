/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = [nums[0]]
    for ( let i = 1 ; i < nums.length; i++){
        sum[i] = sum[i-1] + nums[i]
    }
    let res = (sum[k-1] * 1.0)/k
    
    for(let i=k; i < nums.length; i++ ){
        res = Math.max(res, ((sum[i] - sum[i-k]) * 1.0)/k )
    }
    
    return res;
};