/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {}
  
  for( let i =0; i < nums.length; i++){
     if(nums[i] in map){
         const preIndex = map[nums[i]]
         if((i - preIndex) <= k) return true
    
     }
     map[nums[i]] = i
  }
  return false
};