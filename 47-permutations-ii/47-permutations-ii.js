/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const map = {}
    
    for(const num of nums){
        map[num] = (map[num] || 0) + 1
    }
    
    const result = []
    backtrack([], nums.length, map, result)
    return result
    
};

const backtrack = (temp, n, map, result) => {
    if(temp.length === n){
        result.push([...temp])
    }
    
    for(const [key, value] of Object.entries(map)){
        if(value === 0) continue
        
        temp.push(key)
        map[key] = value - 1
        backtrack(temp, n, map, result)
        temp.pop()
        map[key] = value
    }
}