/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let maxVal = -Infinity
    let minVal = Infinity
    
    for ( let i = 0 ; i < nums.length ; i++){
        if(isOutOfBound(i, nums)){
            maxVal = Math.max(maxVal, nums[i])
            minVal = Math.min(minVal, nums[i])
        }
    }
    let left = 0
    let right = nums.length - 1
    
    console.log(minVal, maxVal)
    if(minVal === Infinity) return 0
    
    while(minVal >= nums[left]){
        left++
    }
    
    while(maxVal <= nums[right]){
        right--
    }
    
    return right - left + 1
};

const isOutOfBound = (i, nums) => {
    const num = nums[i]
    if(i === 0) return num > nums[i + 1]
    if(i === nums.length - 1) return num < nums[ i - 1]
    return num > nums[i + 1] || num < nums[i -1 ]
}