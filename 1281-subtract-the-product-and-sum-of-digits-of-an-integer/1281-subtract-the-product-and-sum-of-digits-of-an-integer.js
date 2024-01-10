/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let prod = 1
    let sum = 0
    
    while(n !== 0){
        const char = n % 10
        n = Math.floor(n / 10)
        prod *= parseInt(char)
        sum += parseInt(char)
    }
    
    return prod - sum
};