/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = {}
    let result = 0
    
    for(let num of nums){
        const val = k - num
        if(val in map){
            if(map[val] === 0) map[num] = ( map[num] || 0 ) + 1
            else{
                result++
                map[val]--
            }
        }
        else{
            map[num] = ( map[num] || 0 ) + 1
        }
        
    }
    return result
};