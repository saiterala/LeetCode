/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const num1Map = {}
    const num2Map = {}
    
    const updateMap = (nums, map) => {
        for(const num of nums){
            if(!map[num]){
                map[num] = true
            }
        }
    }
    
    updateMap(nums1, num1Map)
    updateMap(nums2, num2Map)
    
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