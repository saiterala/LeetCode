/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let sum = 0
    let maxElement = 0
    
    for (const num of nums){
        sum += num
        maxElement = Math.max(num, maxElement)
    }
    
    let left = maxElement
    let right = sum
    let minimumLargestSplitSum = 0
    
    while(left <= right){
        const maxSumAllowed = Math.floor((right + left)/2)
        
        if(minimumSubarraySplitReq(nums, maxSumAllowed) <= m){
            right = maxSumAllowed - 1
            minimumLargestSplitSum = maxSumAllowed
        }else {
            left = maxSumAllowed + 1
        }
    }
    
    return minimumLargestSplitSum 
};

const minimumSubarraySplitReq = (nums, maxValue) => {
    let currentSplit = 0
    let currentSum = 0
    
    for ( const num of nums){
        if(num + currentSum <= maxValue){
            currentSum += num
        }else{
            currentSplit++
            currentSum = num
        }
    }
    
    return currentSplit + 1
}