/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const num1Map = {}
    const num2Map = {}
    
    for(const num of nums1){
        if(!num1Map[num]){
            num1Map[num] = true
        }
    }
    for(const num of nums2){
        if(!num2Map[num]){
            num2Map[num] = true
        }
    }
    let num1 = 0
    let num2 = 0
    
    for(const num of nums1){
        if(num in num2Map){
            num1++
        }
    }
    for(const num of nums2){
        if(num in num1Map){
            num2++
        }
    }
    return [num1, num2]
};