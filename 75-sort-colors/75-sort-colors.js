/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  
    let firstIndex = secondIndex = 0
    let thirdIndex = nums.length -1
    while(secondIndex <= thirdIndex){
        if(nums[secondIndex] === 0){
            swap(secondIndex, firstIndex, nums)
            firstIndex++
            secondIndex++
        }else if(nums[secondIndex] === 1){
            secondIndex++
        }else {
            swap(secondIndex, thirdIndex, nums)
            thirdIndex--
        }
    }
};

const swap = (i, j, arr) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}