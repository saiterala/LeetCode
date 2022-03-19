/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.legth < 2) return []
    
    nums.sort((a,b) => a-b)
    const result = []
    const set = new Set()
    for (let i = 0; i < nums.length; i++){
        //check for duplicate
        if(nums[i] === nums[i-1]) continue
        let left = i + 1
        let right = nums.length -1
        
        while (left < right){
            const sum = nums[i] + nums[left] + nums[right]
            
            if(sum === 0){
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
                //check for duplicate
                while(left < right && nums[left] === nums[left-1]) left++
            }else if (sum < 0){
                left++
            }else right--
        }
    }
    return result
};