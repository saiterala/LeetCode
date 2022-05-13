/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = new Array()
    helper(1, k , n, [], result)
    return result
};

const helper = (start, k, n, temp, result) =>{
    if(n < 0) return
    
    if(n === 0 && k === temp.length){
        result.push([...temp])
    }
    for(let i = start; i <= 9 ; i++ ){
        temp.push(i)
        helper(i + 1, k , n - i, temp, result)
        temp.pop()
    }
}