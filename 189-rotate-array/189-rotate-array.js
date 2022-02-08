/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    const rev = (arr, start, end) => {
        while(start < end){
            const temp = arr[end]
            arr[end] = arr[start]
            arr[start] = temp
            start++
            end--
        }
        return arr
    }
    
    if(nums.length === k)
        return nums
    if(k > nums.length){
        k = k % nums.length
    }
    rev(nums, 0, nums.length-1)
    rev(nums, 0, k-1)
    rev(nums, k, nums.length-1)
};