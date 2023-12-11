/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0
    let map = {0: 0}
    
    for(let i =0; i < nums.length; i++){
        sum += nums[i]
        
        let rem = sum % k
       
        if(!(rem in map)){
            map[rem] = i+1
        }else if(map[rem] < i){
            return true
        }
    }
    
    return false
};