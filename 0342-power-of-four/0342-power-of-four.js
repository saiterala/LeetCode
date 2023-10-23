/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 1) return true
    
    while(n >= 4){
        n = n/4
    }
    
    return n === 1
};