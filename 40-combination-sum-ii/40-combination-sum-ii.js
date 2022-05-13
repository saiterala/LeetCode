/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = []
    helper(0, candidates, target, [], result)
    return result
};

const helper = (idx, candidates, target, temp, result) => {
    candidates.sort((a,b) => a-b)
    if(target < 0) return
    
    if(idx > candidates.length) return
    
    if(target === 0 ){
        result.push([...temp])
    }
    
    for(let i =idx; i < candidates.length; i++){
        if(i > idx && candidates[i] === candidates[i - 1]) continue;
        const val = candidates[i]
        temp.push(val)
        helper(i+1, candidates, target-val, temp, result)
        temp.pop()
    }
}