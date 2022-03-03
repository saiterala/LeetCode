/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = Array(n + 1).fill(0)
    if(n===0) return result
    for (let i =1; i < n + 1; i++){
        if(i % 2 === 0){
            result[i] = result[i/2]
        }else{
            result[i] = result[i-1] + 1
        }
    }
    return result
    
};