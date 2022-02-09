/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const map = {}
    let result = new Set()
    nums.sort((a,b) => b-a)
    map[nums[0]] = true
    
    for ( let i = 1; i < nums.length ; i++){
        const value = nums[i]
        const diff = k+value
        if(diff in map){
            result.add(`${k}_${diff}`)
        }
        map[value] = true
    }
    return result.size
};