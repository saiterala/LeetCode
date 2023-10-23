/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = []
    const map = {}
    const res = []
    
    for(let i = 0; i < nums2.length ; i++){
        
        while(stack.length && stack[stack.length - 1] < nums2[i]){
            map[stack.pop()] = nums2[i]
        }
        stack.push(nums2[i])
    }
    for(let i = 0; i < nums1.length; i++){
        if(nums1[i] in map){
            res.push(map[nums1[i]])
        }else res.push(-1)
    }
    
    console.log(map)
    return res
    
};