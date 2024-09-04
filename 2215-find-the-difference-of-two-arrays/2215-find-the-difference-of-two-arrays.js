/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const map1 = {}
    const map2= {}
    
    for(const num of nums1){
        map1[num] = true
    }
    
    
    for(const num of nums2){
        map2[num] = true
    }
    
    const answer1 = new Set()
    for(const num of nums1){
        if(!(num in map2) ){
            answer1.add(num)
        } 
    }
    
    const answer2 = new Set()
    for(const num of nums2){
       if(!(num in map1) ){
            answer2.add(num)
        } 
    }
    
    return [[...answer1], [...answer2]]
};