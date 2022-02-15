/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0]
    const map = {}
    for ( const num of nums){
        map[num] = (map[num] || 0) + 1
    }
    
    for (const num of nums){
        if(map[num] === 1) return num
    }
};