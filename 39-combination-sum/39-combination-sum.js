/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    const len = candidates.length;
    const result = [];
    
    const recursiveFxn = (sum, idx, arr) => {
        if(idx >= len) {
            return;
        }
        if(sum < 0) {
            return;
        }
        if(sum === 0) {
            result.push([...arr]);
        }
        for(let i = idx; i < len; i++) {
            arr.push(candidates[i]);
            recursiveFxn(sum-candidates[i], i, arr);
            arr.pop(candidates[i]);
        }
        
    };

    recursiveFxn(target, 0, []);
    return result;
};
