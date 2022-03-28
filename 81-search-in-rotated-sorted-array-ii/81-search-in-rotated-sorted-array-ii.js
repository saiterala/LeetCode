/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while(left <= right){
        if(target === nums[left] || target === nums[right]) return true
        let middle = Math.floor((left + right) / 2)
        if(target === nums[middle]) return true
        // if(nums[left] === nums[middle]) left++
        // else if(nums[middle] === nums[right]) right--
        if(nums[left] === nums[middle] && nums[middle] === nums[right]){
            left++
            right--
        }
        else if(nums[left] <= nums[middle]){
            if(target >= nums[left] && target < nums[middle] ) right = middle - 1
            else left = middle + 1
        }
        else if(nums[middle] <= nums[right]){
            if(target > nums[middle] && target <= nums[right] ) left = middle + 1
            else right = middle - 1
        }
    }
    
    return false
};