/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = new Set()
    const num1Set = new Set(nums1)
    for(const num of nums2){
        if(num1Set.has(num)){
            res.add(num)
        }
    }
    return Array.from(res)
};