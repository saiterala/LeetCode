/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    let sum = 0
    const map = {0:1}
    
    for( const num of nums){
        sum += num
        const diff = sum - k
        if(diff in map){
            count += map[diff]
        }
        map[sum] = (map[sum] || 0) + 1
    }
    return count
    
};