/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = {}
    let res = 0
    
    for( let i =0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]].forEach(e => res++)
            map[nums[i]] = [...map[nums[i]], i]
        }else {
            map[nums[i]] = [i]
        }
    }
    return res
};