/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    const result = []
    result.push(num[0])
    for (let i = 1; i< num.length; i++){
        while(result.length && k > 0 && num[i] < result[result.length -1]){
            k--
            result.pop()
        }
        result.push(num[i])
        if(result.length === 1 && result[0] === '0'){
            result.pop()
        }
    }
    
    while(k > 0 && result.length){
        result.pop()
        k--
    }
    if(result.length === 0 ) return "0"
    return result.join('')
};