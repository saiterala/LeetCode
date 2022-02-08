/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map ={}
    let result = 0
    for (const num1 of nums1){
        for (const num2 of nums2){
            const key = num1 + num2
            map[key] = (map[key] || 0) + 1
        }
    }
    for (const num3 of nums3){
        for (const num4 of nums4){
            const value = num3 + num4
            result += map[-value] || 0
        }
    }
    
    return result
};