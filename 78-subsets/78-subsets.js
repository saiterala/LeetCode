/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]]
    for (const char of nums){
        const length = result.length
        for ( let i =0; i< length; i++){
            result.push([...result[i], char])
        }
    }
    return result
};