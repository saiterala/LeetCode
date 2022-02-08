/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const numsSet = new Set().add([])
    const result = [[]]
    nums.sort((a,b) => a-b)
    
    for (const num of nums){
        const resLen = result.length
        for (let i = 0; i < resLen ; i++){
            const val = [...result[i], num]
            if(!numsSet.has(JSON.stringify(val))){
                result.push(val)
                numsSet.add(JSON.stringify(val))
            }
            
        }
    }
    return result
};