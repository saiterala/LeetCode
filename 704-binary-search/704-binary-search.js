/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot, left = 0, right=nums.length-1
    while( left <= right){
        pivot = left+ Math.floor(right-left /2)
        if(nums[pivot] === target) { return pivot}
        if(nums[pivot < target]) {left = pivot+1}
        else {
            right = pivot-1
        }
    }
    return -1
};