/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    const result = Array(n).fill(1)
    let newK = k - n
    let i = n - 1
    while(newK > 0){
        result[i] = result[i] + Math.min(newK, 25)
        newK = newK - Math.min(newK, 25)
        i--
    }
    return getCharString(result)
    
};

    
const getCharString = (arr) => {
    for (let i =0; i < arr.length; i++){
        arr[i] = String.fromCharCode(arr[i] + 96)
    }
    return arr.join('')
}