/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const map = {}
    for(let i = 0 ; i < mat.length; i++){
        let value = mat[i].lastIndexOf(1) + 1
        const key = map[value] || []
        map[value] = [...key, i]
    }
    const result = []
    const sorted = Object.keys(map).sort((a,b) => a-b)
    for ( let i = 0; i < sorted.length; i++){
        const value = map[sorted[i]]
        while(result.length < k && value.length){
            result.push(value.shift())
        }
    }
    return result
};