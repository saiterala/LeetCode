/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let arr = []

    let curr = -Infinity;

    for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < curr) {
        return true
    }

     while(arr.length > 0 && nums[i] > arr[arr.length - 1]) {
         curr = arr.pop()
     }

     arr.push(nums[i])
    }

    return false
};