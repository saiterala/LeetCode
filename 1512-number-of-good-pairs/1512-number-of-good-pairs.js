/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = {}
    let res = 0
    
    for( let i =0; i < nums.length; i++){
        if(map[nums[i]]){
            res += map[nums[i]]
            map[nums[i]] = map[nums[i]] + 1
        }else {
            map[nums[i]] = 1
        }
    }
    return res
};