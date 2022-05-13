/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    helper(1, n, k, [], result)
    return result
};

const helper = (start, n, k, temp , result) => {
    if(temp.length === k){
        result.push([...temp])
    }
    
    for(let i =start; i <= n; i++){
        temp.push(i)
        helper(i+1, n , k, temp , result)
        temp.pop()
    }
}