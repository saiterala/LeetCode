/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = -Infinity
    let result
    const map ={}
    for (let i = 0; i< nums.length; i++){
        map[nums[i]] = (map[nums[i]] || 0) + 1
       if(map[nums[i]] > max){
           result = nums[i]
           max = map[nums[i]]
       }
    }
    return result
};