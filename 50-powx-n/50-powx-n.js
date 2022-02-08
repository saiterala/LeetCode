/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const result = powHelper(x,Math.abs(n))
    if(n < 0)
        return 1/result
    return result
};

const powHelper = (x,n) => {
    if(n === 0) return 1
    if(n === 1) return x
    const nHalf = Math.floor(n / 2)
    const val = powHelper(x, nHalf)
    
    if((n % 2) === 1){
        return x * val * val
    }else {
        return val * val
    }
}